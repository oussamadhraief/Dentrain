import { useContext } from "react"
import AuthLoadingContext from "../contexts/AuthLoadingProvider"

const useAuthLoading = () => {
    return useContext(AuthLoadingContext)
}

export default useAuthLoading
