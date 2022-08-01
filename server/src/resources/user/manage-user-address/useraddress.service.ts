import UtilisateurTempThree from '../user.model';
import { UserInterface, userAddress } from '../user.interface';
import HttpException from '../../../utils/exceptions/http.exception';

class UserService {
    private user = UtilisateurTempThree;

    /**
     * update a user
     */

    public async create( authenticatedUser: any, address: string, detailedAddress: string,
        company: string,
        zipCode: string,
        city: string,
        country: { label: string; value: string},
        addressName: string,
        defaultAddress: boolean  ): Promise<UserInterface> {
        try {
            
            const user = await this.user.findOne({ email: authenticatedUser.email })

            if(!user)
                throw new HttpException(404, 'Unable to find user')
                // maybe should use return to stop function ?????????

            const addressAlreadyExists = user.address.some(item => item.addressName === addressName)
            if(addressAlreadyExists)
                throw new HttpException(400, 'Address name must be unique')

            if(defaultAddress) {    
                for (let item of user?.address) {
                    item.defaultAddress = false
            }}

            user?.address.push({address,detailedAddress,
                company,
                zipCode,
                city,
                country,
                addressName,
                defaultAddress })
            
            await user?.save()

            return user

        } catch (error: any) {
            
            throw new HttpException(error.status,error.message)

        }
    }

    public async update( authenticatedUser: any, address: string, detailedAddress: string,
        company: string,
        zipCode: string,
        city: string,
        country: { label: string; value: string},
        addressName: string,
        defaultAddress: boolean  ): Promise<UserInterface> {
        try {
            
            const user = await this.user.findOne({ email: authenticatedUser.email })

            if(!user)
                throw new Error('Unable to find user')

            // const addressCorrect = user.address.some(item => item.addressName === addressName)

            if(defaultAddress) {    
                for (let item of user.address) {
                    item.defaultAddress = false
                }}

            const temp: userAddress[] = user.address.map(item => {
                if(item.addressName === addressName) 
                    return {
                        address, 
                        detailedAddress,
                        company,
                        zipCode,
                        city,
                        country,
                        defaultAddress,
                        addressName: item.addressName
                    }
                return item
            })

            user.address = temp

            await user.save()

            return user

        } catch (error) {
            throw new Error('Unable to update user');
        }
    }

    public async delete( authenticatedUser: any, addressName: string  ): Promise<UserInterface> {
        try {
            
            const user = await this.user.findOne({ email: authenticatedUser.email })

            if(!user)
                throw new Error('Unable to find user')

            const temp: userAddress[] = user.address.filter(item => item.addressName != addressName)

            user.address = temp

            await user.save()

            return user

        } catch (error) {
            throw new Error('Unable to update user');
        }
    }
}

export default UserService;
