import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../../utils/interfaces/controller.interface';
import HttpException from '../../../utils/exceptions/http.exception';
import validationMiddleware from '../../../middleware/validation.middleware';
import validate from './useraddress.validation';
import UserAddressService from './useraddress.service';

class UserAddressController implements Controller {
    public path = '/user/add-user-address';
    public router = Router();
    private UserAddressService = new UserAddressService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.update),
            this.update
        );
    }

    private update = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            if(req.isAuthenticated())
            {
                const { 
                    address,
                    detailedAddress,
                    company,
                    zipCode,
                    city,
                    country,
                    addressName,
                    defaultAddress 
                } = req.body;
                const { user } = req
                
    
                const updatedUser = await this.UserAddressService.update( user, address, detailedAddress,
                    company,
                    zipCode,
                    city,
                    country,
                    addressName,
                    defaultAddress  )
    
                res.status(201).json({ updatedUser });
            }
        } catch (error) {
            next(new HttpException(400, "Cannot update user's name"));
        }
    };
}

export default UserAddressController;
