import express, { Request,Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
import passportLocal from 'passport-local'
import bcrypt from 'bcryptjs'
import 'dotenv/config'
import UtilisateurTempThree from './resources/user/user.model'
import { UserInterface } from './resources/user/user.interface'
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import ErrorMiddleware from './middleware/error.middleware';
import helmet from 'helmet';
import PostController from './resources/post/post.controller'
import UserInfoController from './resources/user/update-user-info/userinfo.controller'
import UserAddressController from './resources/user/manage-user-address/useraddress.controller'
import { v2 as cloudinary } from 'cloudinary'
// const stripe = require('stripe')(STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 10000, name: "Learn React Today" }],
    [2, { priceInCents: 20000, name: "Learn CSS Today" }],
])

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });


    const LocalStrategy = passportLocal.Strategy

    const { MONGO_USER,MONGO_PASSWORD,MONGO_PATH } = process.env

    mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err) => {
        if (err) throw err;
        console.log("Connected To Mongo")
      })

    //Middleware
    const app = express()
    app.use(express.json())
    app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
    app.use(session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true
    }))
    app.use(cookieParser())
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(helmet())
    app.use(cors())
    app.use(morgan('dev'))
    app.use(compression())
    app.use(ErrorMiddleware)
    app.use(express.json({ limit: '50mb' }))

    
    //Passport
    passport.use(new LocalStrategy({usernameField: "email", passwordField: "password"},( email, password, done ) => {
        UtilisateurTempThree.findOne({ email }, (err: any, user: any ) => {
            
            if(err) throw err
            if(!user) return done(null,false)
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) throw err
                if(result === true) {
                    return done(null,user)
                }else{
                    return done(null,false)
                }
            })
        })
    }))

    passport.serializeUser((user: any, cb) => {
        cb(null, user.id)
    })

    passport.deserializeUser((id: string, cb) => {
        UtilisateurTempThree.findOne({ _id: id }, (err:any, user: any)  => {
            const userInformation = {
                id: user._id,
                email: user.email,
                phone: user.phone,
                name: user.name,
                role: user.role,
                address: user.address
            }
            cb(err, userInformation)
        })
    })


    //Routes

    app.post('/api/user/register', async ( req: Request, res: Response ) => {

        const { email, password, name } = req?.body

        if(!email || !password || !name || typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            res.status(400).json({ success: false })
        }

        UtilisateurTempThree.findOne({ email } , async (err: Error, doc: UserInterface) => {
            if(err) throw err
            if(doc) res.send("User Already Exists")
            if(!doc) {
                const hashedPassword = await bcrypt.hash(password, 10)
                const newUser = new UtilisateurTempThree({
                    name,
                    email,
                    password: hashedPassword,
                    role: 'user'
                })
                await newUser.save()
                res.status(201).json({ success: true })
            }
        })
        
    })

    app.post('/api/user/login', passport.authenticate("local"), async ( req: Request, res: Response ) => { 
        
        res.status(200).json({ success: true , user: req.user })
    })

    
    app.get('/api/user/logout', async ( req: Request, res: Response, done ) => { 
        req.logout(done)
        res.status(204).json({ success: true })
    })
    
    app.get('/api/user', ( req: Request, res: Response ) => {
        if(req.isAuthenticated())
        {res.status(200).json({success: true, message: 'user found', user: req.user , session: req.sessionID })}
        else{ res.status(401).json({ success: false })}
    })
    
    app.use('/api', new PostController().router)

    app.use('/api', new UserInfoController().router)

    app.use('/api', new UserAddressController().router)

    app.post('/api/upload', async ( req: Request, res: Response ) => {
        try {
            const file: string = req.body.data
            
            const uploadedResponse = await cloudinary.uploader.upload(file, { upload_preset: process.env.CLOUDINARY_PRESET_NAME })

            res.json({ imagePublicId: uploadedResponse })
        } catch (error) {

            console.error(error)
        }
    })

    app.post('/api/delete-image', async ( req: Request, res: Response ) => {
        try {
            const { publicId } = req.body
            
            cloudinary.uploader.destroy(publicId, function(error: any,result: any) {
                if(result){

                    res.json({ success: true, data: result.result })
                }else{
                    res.json({ success: false })
                    
                }
                
                
                    
            });
        } catch (error) {

            console.error(error)
        }
    })


    app.listen(process.env.PORT, () => {
    console.log('Server listening on port',process.env.PORT)})
