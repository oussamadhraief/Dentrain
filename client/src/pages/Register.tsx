import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from "../hooks/useAuth"


const Register = () => {

    const navigate = useNavigate()
    const location:any = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { setAuth } = useAuth()

    const [RegisterForm, setRegisterForm] = useState({firstName: '', lastName: '', email: '', password: ''})

    const handleChange = (e: React.FormEvent) => {
        const {name,value} = e.target as HTMLInputElement
        setRegisterForm({
            ...RegisterForm,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try {
            axios.post("/api/user/register",{
                email: RegisterForm.email,
                name: `${RegisterForm.firstName} ${RegisterForm.lastName}`,
                password: RegisterForm.password
            },{
                withCredentials: true
            }).then(res => {
                axios.post(`/api/user/login`,{
                    email: RegisterForm.email,
                    password: RegisterForm.password
                },
                {
                    withCredentials: true
                }).then(res => {
                    setAuth({user: res?.data?.user})
                    navigate(from, { replace: true })
                })
                
            })
        } catch (error) {
            
        }
    }

  return (
    <main className="h-fit w-full flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-1/5 min-w-[320px] h-fit py-20 grid place-items-center">
            <h1 className="w-fit h-fit text-3xl font-bold text-darkertrendygreen mb-7">Register</h1>
            <label className="grid w-full h-fit font-medium text-lg mb-5">
                First Name
                <input type="text" name="firstName" value={RegisterForm.firstName} onChange={e => handleChange(e)} className="border text-base font-normal w-full h-10 outline-none" />
            </label>
            <label className="grid w-full h-fit font-medium text-lg mb-5">
                Last Name
                <input type="text" name="lastName" value={RegisterForm.lastName} onChange={e => handleChange(e)} className="border text-base font-normal w-full h-10 outline-none" />
            </label>
            <label className="grid w-full h-fit font-medium text-lg mb-5">
                Email
                <input type="email" name="email" value={RegisterForm.email} onChange={e => handleChange(e)} className="border text-base font-normal w-full h-10 outline-none" />
            </label>
            <label className="grid w-full h-fit font-medium text-lg mb-5">
                Password
                <input type="password" name="password" value={RegisterForm.password} onChange={e => handleChange(e)} className="border text-base font-normal w-full h-10 outline-none" />
            </label>
            <label className="grid w-full h-fit font-medium text-lg">
                Confirm Password
                <input type="password" name="password" value={RegisterForm.password} onChange={e => handleChange(e)} className="border text-base font-normal w-full h-10 outline-none" />
            </label>
            <button type="submit" className="w-full h-fit py-2.5 bg-trendygreen font-medium text-white my-7">Sign-up</button>
            <div className="w-full h-fit flex justify-center items-center flex-nowrap gap-1 mb-7">
                <p>Already have an account ? </p>
                <Link to={'/login'} className='w-fit text-darkertrendygreen hover:underline'>Sign-in here !</Link>
            </div>
        </form>
    </main>
  )
}

export default Register