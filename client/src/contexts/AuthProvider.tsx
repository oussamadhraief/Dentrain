import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Auth } from "../services/authentication";

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
    

    return (
        <AuthContext.Provider value={{ Auth,setAuth }} >
                {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext