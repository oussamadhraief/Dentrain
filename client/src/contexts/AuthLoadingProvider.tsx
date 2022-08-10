import { createContext, PropsWithChildren, useEffect, useState } from "react"

export type LoadingContent = {
    AuthLoading: boolean;
    setAuthLoading:(c: boolean) => void
  }

  export const AuthLoadingContext = createContext<LoadingContent>({
    AuthLoading: true,
    setAuthLoading: () => {},
  })

export const AuthLoadingProvider = (props: PropsWithChildren<any>) => {

    const [AuthLoading, setAuthLoading] = useState<boolean>(true)

    return (
        <AuthLoadingContext.Provider value={{ AuthLoading,setAuthLoading }} >
                {props.children}
        </AuthLoadingContext.Provider>
    )
}

export default AuthLoadingContext