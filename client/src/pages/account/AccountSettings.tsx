import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import useAuth from "../../hooks/useAuth"

const AccountSettings = () => {

    const { setAuth } = useAuth()

    const [Username, setUsername] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.patch('/api/user/update-name',{
            name: Username
        },{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            withCredentials: true
        }).then((res: AxiosResponse)=> {
            console.log(res?.data?.updatedUser);
            setAuth({ user : res?.data?.updatedUser })
        })
    }

  return (
    <div className="flex-1">
        <form onSubmit={handleSubmit}>
            <input type="text" name="" value={Username} onChange={e => setUsername(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default AccountSettings