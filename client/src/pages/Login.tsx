import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"


const Login = () => {

    const emailInputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const location:any = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { setAuth } = useAuth()

    const [LoginForm, setLoginForm] = useState({email: '',password: ''})

    useEffect(() => {
        emailInputRef.current?.focus()
    }, [])
    

    const handleChange = (e: React.FormEvent) => {
        const {name,value} = e.target as HTMLInputElement
        setLoginForm({
            ...LoginForm,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
            axios.post(`/api/user/login`,{
                email: LoginForm.email,
                password: LoginForm.password
            },
            {
                withCredentials: true
            }).then(res => {
                setAuth({user: res?.data?.user})
                navigate(from, { replace: true })
            })
          
    }

  return (
    <main className="h-fit w-full flex justify-center items-center">
        <form className="w-1/5 min-w-[320px] h-fit py-24 grid place-items-center" onSubmit={handleSubmit}>
            <h1 className="w-fit h-fit text-3xl font-bold text-darkertrendygreen mb-7">Login</h1>
            <label className="grid w-full h-fit font-medium text-lg mb-5">
                Email
                <input ref={emailInputRef} type="text" name="email" value={LoginForm.email} onChange={e => handleChange(e)} className="border text-base w-full h-10 outline-none px-1" />
            </label>
            <label className="grid w-full h-fit font-medium text-lg">
                Password
                <input type="password" name="password" value={LoginForm.password} onChange={e => handleChange(e)} className="border text-base w-full h-10 outline-none px-1" />
            </label>
            <div className="w-full text-right mb-7">
                <Link to={'/password-reset'} className='w-fit text-darkertrendygreen hover:underline'>Forgot password ?</Link>
            </div>
            <button type="submit" className="w-full h-fit py-2.5 bg-trendygreen font-medium text-white mb-7">Sign-in</button>
            <div className="w-full h-fit flex justify-center items-center flex-nowrap gap-1 mb-7">
                <p>Don't have an account ? </p>
                <Link to={'/register'} className='w-fit text-darkertrendygreen hover:underline'>Create one !</Link>
            </div>
        </form>
    </main>
  )
}

export default Login