import axios from "axios";
import useAuth from "../hooks/useAuth";

export interface Auth {
    user : {
        name: string;
        phone: string;
        email: string;
        role: string;
        address: userAddress[];
    }
}

export interface userAddress {
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


export const authentication = ( setLoading: React.Dispatch<React.SetStateAction<boolean>>, setAuth: (c: Auth | null) => void ) => {
    axios.get('/api/user',{
        withCredentials: true
      }).then((res) => {
          
        setAuth({user: res?.data?.user})
        setLoading(false)

      }).catch(() => {

        setAuth(null)
        setLoading(false)

      })
}