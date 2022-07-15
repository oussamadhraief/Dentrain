import React, { useState } from "react"
import { Link } from 'react-router-dom'


const Login = () => {

    const [LoginForm, setLoginForm] = useState({email: '',password: ''})

    const handleChange = (e: React.FormEvent) => {
        const {name,value} = e.target as HTMLInputElement
        setLoginForm({
            ...LoginForm,
            [name]: value
        })
    }

  return (
    <main className="h-fit w-full flex justify-center items-center">
        <form className="w-1/5 h-fit py-24 grid place-items-center">
            <h1 className="w-fit h-fit text-3xl font-bold text-darkertrendygreen mb-7">Login</h1>
            <label className="grid w-full h-fit font-medium text-lg mb-5">
                Email
                <input type="email" name="email" value={LoginForm.email} onChange={e => handleChange(e)} className="border text-base font-normal w-full h-10 outline-none" />
            </label>
            <label className="grid w-full h-fit font-medium text-lg">
                Password
                <input type="password" name="password" value={LoginForm.password} onChange={e => handleChange(e)} className="border text-base font-normal w-full h-10 outline-none" />
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