import UtilisateurTempThree from '../user.model';
import { UserInterface } from '../user.interface';

class UserService {
    private user = UtilisateurTempThree;

    /**
     * update a user
     */

    public async update( authenticatedUser: any, name: string, phone: string ): Promise<UserInterface | Error> {
        try {
            
            const user = await this.user.findOneAndUpdate({ email: authenticatedUser.email },{ name, phone },{ new: true, runValidators: true, useFindAndModify: false });

            if(!user)
                throw new Error('Unable to update user');

            return user

        } catch (error) {
            throw new Error('Unable to update user');
        }
    }
}

export default UserService;
