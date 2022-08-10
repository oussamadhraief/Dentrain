import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons';
import { IoIosArrowDown } from 'react-icons/io';
import useAuth from '../hooks/useAuth';

interface Props {
    ShowUsernameForm: boolean;
    setShowUsernameForm: React.Dispatch<React.SetStateAction<boolean>>;
    setShowUseraddressesSection: React.Dispatch<React.SetStateAction<boolean>>;
    setShowUserpasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserInfoData {
    username: string;
    phone: string;
}

const UserInfoSettings = ({ ShowUsernameForm, setShowUsernameForm, setShowUseraddressesSection, setShowUserpasswordForm }: Props) => {

    const { Auth,setAuth } = useAuth()

    const UserInfoSubmitButtonRef = useRef<HTMLButtonElement>(null)

    const [isUserNameActive, setisUserNameActive] = useState<boolean>(false)
    const [isUserPhoneActive, setisUserPhoneActive] = useState<boolean>(false)
    const [UserInfoForm, setUserInfoForm] = useState<UserInfoData>({ username: '', phone: '' })

    useEffect(() => {

        if(UserInfoSubmitButtonRef.current)
            UserInfoSubmitButtonRef.current.disabled = true

        if(Auth?.user?.name){
            setisUserNameActive(true)
            setUserInfoForm({
                ...UserInfoForm,
                username: Auth.user.name
            })
        }
    
        if(Auth?.user?.phone){
            setisUserPhoneActive(true)
            setUserInfoForm({
                ...UserInfoForm,
                phone: Auth.user.phone
            })
        }
    
        }, [])

        useEffect(() => {
            if(!ShowUsernameForm) {
                
                if(UserInfoSubmitButtonRef.current)
                    UserInfoSubmitButtonRef.current.disabled = true

                if(Auth?.user?.name){
                    setisUserNameActive(true)
                    setUserInfoForm({
                        ...UserInfoForm,
                        username: Auth.user.name
                    })
                }
            
                if(Auth?.user?.phone){
                    setisUserPhoneActive(true)
                    setUserInfoForm({
                        ...UserInfoForm,
                        phone: Auth.user.phone
                    })
                }

            }

        },[ShowUsernameForm])

    const handleChange = ( e: React.FormEvent<HTMLInputElement>, setIsActive: React.Dispatch<React.SetStateAction<boolean>> ) => {

        if(UserInfoSubmitButtonRef.current)
            UserInfoSubmitButtonRef.current.disabled = false

        const target = e.target as HTMLInputElement
        setUserInfoForm({
            ...UserInfoForm,
            [target.name]: target.value
        });
        
        if (target.value !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.patch('/api/user/update-user-info',JSON.stringify({
            name: UserInfoForm.username,
            phone: UserInfoForm.phone
        }),{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            withCredentials: true
        }).then((res: AxiosResponse)=> {
            setAuth({ user : res?.data?.updatedUser })
        })
    }

  return (
    <div className={ShowUsernameForm ? "w-[570px] h-fit overflow-hidden pb-2" : "w-[570px] h-fit overflow-hidden border-b border-zinc-300 pb-2"}>

            <button className="w-full flex justify-between items-center text-xl font-medium px-1 text-darkertrendygreen" onClick={() => {
                setShowUsernameForm(prev => !prev)
                setShowUserpasswordForm(false)
                setShowUseraddressesSection(false)
            }}>
                Change your personal information 
                <IconContext.Provider value={{ className: ShowUsernameForm ? 'rotate-180 transition-all' : "rotate-0 transition-all"}}>
                    <IoIosArrowDown />
                </IconContext.Provider>
            </button>

            <form className={ShowUsernameForm ? "w-[450px] h-fit pb-14 grid max-h-[1000px] overflow-hidden transition-all duration-300" : "w-[450px] h-fit grid max-h-0 overflow-hidden transition-all duration-300"} onSubmit={handleSubmit}>


            <div className="flex flex-col floatingLabel w-full relative mt-10">
                    <input type="text" name="username" id="username" value={UserInfoForm.username} onChange={e => handleChange( e, setisUserNameActive )} />
                    <label htmlFor="username" className={ isUserNameActive ? "Active" : ""}>Full name</label>
            </div>

            <div className="flex flex-col floatingLabel w-full relative mt-10">
                    <input type="number" name="phone" id="phone" value={UserInfoForm.phone} onChange={e => handleChange( e, setisUserPhoneActive )} className='removeArrowButtons' />
                    <label htmlFor="phone" className={ isUserPhoneActive ? "Active" : ""}>Phone number</label>
            </div>

                <button ref={UserInfoSubmitButtonRef} type="submit" className="w-fit rounded bg-trendygreen px-4 h-10 shadow-trendygreen/20 text-white font-medium shadow-modern mt-4 mx-auto disabled:bg-zinc-400 disabled:shadow-none transition-all duration-300 hover:scale-105 disabled:hover:scale-100 hover:bg-orange hover:shadow-orange/20">Save changes</button>

            </form>
        
        </div>
  )
}

export default UserInfoSettings