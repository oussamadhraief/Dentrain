import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../../utils/interfaces/controller.interface';
import HttpException from '../../../utils/exceptions/http.exception';
import validationMiddleware from '../../../middleware/validation.middleware';
import validate from './userinfo.validation';
import UserInfoService from './userinfo.service';

class UserInfoController implements Controller {
    public path = '/user/update-user-info';
    public router = Router();
    private UserInfoService = new UserInfoService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.patch(
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
                const { name, phone } = req.body;
                const { user } = req
                
    
                const updatedUser = await this.UserInfoService.update( user, name,phone );
    
                res.status(201).json({ updatedUser });
            }
        } catch (error) {
            next(new HttpException(400, "Cannot update user's name"));
        }
    };
}

export default UserInfoController;
