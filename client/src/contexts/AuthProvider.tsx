import axios from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";

interface Auth {
    user : {
        name: string;
        phone: string;
        email: string;
        role: string;
    }
}

export type AuthContent = {
    Auth: Auth | null;
    setAuth:(c: Auth | null) => void
  }
  export const AuthContext = createContext<AuthContent>({
  Auth: null,
  setAuth: () => {},
  })

export const AuthProvider = (props: PropsWithChildren<any>) => {

    const [Auth, setAuth] = useState<Auth | null>(null)
    const [Loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        axios.get('/api/user',{
              withCredentials: true
            }).then((res) => {

              setAuth({user: res?.data?.user})
              console.log(res?.data?.user);
              
              setLoading(false)
            }).catch(() => setLoading(false))
            
     },[])

    return (
        <AuthContext.Provider value={{ Auth,setAuth }} >
            {Loading ? <LoadingAnimation /> : 
            <>
                {props.children}
            </>}
        </AuthContext.Provider>
    )
}

export default AuthContext