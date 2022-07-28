import TempUtilisateur from '../user.model';
import { UserInterface } from '../user.interface';

class UserService {
    private user = TempUtilisateur;

    /**
     * update a user
     */

    public async update(authenticatedUser: any, name: string): Promise<UserInterface | null> {
        try {
            
            const user = await this.user.findOneAndUpdate({ email: authenticatedUser.email },{ name },{ new: true, runValidators: true });

            return user

        } catch (error) {
            throw new Error('Unable to update user');
        }
    }
}

export default UserService;
