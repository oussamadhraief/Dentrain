import UtilisateurTempThree from '../user.model';
import { userAddress, UserInterface } from '../user.interface';

class UserService {
    private user = UtilisateurTempThree;

    /**
     * update a user
     */

    public async update( authenticatedUser: any, address: string, detailedAddress: string,
        company: string,
        zipCode: string,
        city: string,
        country: { label: string; value: string},
        addressName: string,
        defaultAddress: boolean  ): Promise<UserInterface | Error> {
        try {
            
            const user = await this.user.findOne({ email: authenticatedUser.email })

            if(!user)
                throw new Error('Unable to find user')

            for (let item of user?.address) {
                item.defaultAddress = false
            }

            user?.address.push({address,detailedAddress,
                company,
                zipCode,
                city,
                country,
                addressName,
                defaultAddress })
            
            await user?.save()

            return user

        } catch (error) {
            throw new Error('Unable to update user');
        }
    }
}

export default UserService;
