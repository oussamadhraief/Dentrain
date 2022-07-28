import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../../utils/interfaces/controller.interface';
import HttpException from '../../../utils/exceptions/http.exception';
import validationMiddleware from '../../../middleware/validation.middleware';
import validate from './username.validation';
import UserNameService from './username.service';

class UserNameController implements Controller {
    public path = '/user/update-name';
    public router = Router();
    private UserNameService = new UserNameService();

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
                const { name } = req.body;
                const { user } = req
                
    
                const updatedUser = await this.UserNameService.update( user, name );
    
                res.status(201).json({ updatedUser });
            }
        } catch (error) {
            next(new HttpException(400, 'Cannot update user'));
        }
    };
}

export default UserNameController;
