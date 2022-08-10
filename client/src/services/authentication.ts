import axios from "axios";

export interface Auth {
    user : {
        name: string;
        phone: string;
        email: string;
        role: string;
        address: UserAddress[];
    }
}

export interface UserAddress {
    address: string;
    detailedAddress: string;
    company: string;
    zipCode: string;
    city: string;
    country: {
        label: string;
        value: string;
    } | string;
    addressName: string;
    defaultAddress: boolean;
}


export const authentication = ( setAuthLoading: (c: boolean) => void, setAuth: (c: Auth | null) => void ) => {

    // setAuthLoading(true)

    axios.get('/api/user',{
        withCredentials: true
      }).then((res) => {
          
        setAuth({user: res?.data?.user})
        
        setAuthLoading(false)
        
      }).catch(() => {
        
        setAuth(null)
        setAuthLoading(false)

      })
      
}