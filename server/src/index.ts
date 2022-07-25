import express, { Request,Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
import passportLocal from 'passport-local'
import bcrypt from 'bcryptjs'
import 'dotenv/config'
import TempUser from './models/User'
import { UserInterface } from 'interfaces/user.interface'
import bodyParser from 'body-parser'

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
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(passport.initialize())
    app.use(passport.session())
    
    //Passport
    passport.use(new LocalStrategy({usernameField: "email", passwordField: "password"},( email, password, done ) => {
        TempUser.findOne({ email }, (err: any, user: any ) => {
            
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
        TempUser.findOne({ _id: id }, (err:any, user: any)  => {
            const userInformation = {
                email: user.email,
                phone: user.phone,
                name: user.name,
                role: user.role
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

        TempUser.findOne({ email } , async (err: Error, doc: UserInterface) => {
            if(err) throw err
            if(doc) res.send("User Already Exists")
            if(!doc) {
                const hashedPassword = await bcrypt.hash(password, 10)
                const newUser = new TempUser({
                    name,
                    email,
                    password: hashedPassword
                })
                await newUser.save()
                res.status(201).json({ success: true })
            }
        })
        
    })

    app.post('/api/user/login', passport.authenticate("local"), async ( req: Request, res: Response ) => { 
        
        res.status(200).json({ success: true , user: req.user })
    })

    app.post('/api/user/logout', async ( req: Request, res: Response, done ) => { 
        req.logOut(done)
        res.status(204).end()
    })

    app.get('/api/user', (req,res) => {
        if(req.isAuthenticated())
            {res.status(200).json({success: true, message: 'user found', user: req.user, session: req.sessionID })}
            else{ res.status(401).json({ success: false })}
    })

app.listen(process.env.PORT, () => {
    console.log('Server listening on port',process.env.PORT);
})
