import { useEffect, useState } from "react"
import LoadingAnimation from "../../components/LoadingAnimation"
import useAuth from "../../hooks/useAuth"
import { authentication } from "../../services/authentication"

const WomensCollections = () => {

  const { setAuth } = useAuth()

  const [Loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        authentication(setLoading, setAuth)
    },[])

  if(Loading)
    return <LoadingAnimation />

  return (
    <main>

    </main>
  )
}

export default WomensCollections