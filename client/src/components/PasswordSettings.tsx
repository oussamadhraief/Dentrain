import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
    ShowUserpasswordForm: boolean;
    setShowUsernameForm: React.Dispatch<React.SetStateAction<boolean>>;
    setShowUseraddressesSection: React.Dispatch<React.SetStateAction<boolean>>;
    setShowUserpasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
    setShowAddNewAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
    setShowUpdateAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PasswordData {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const PasswordSettings = ({ ShowUserpasswordForm, setShowUserpasswordForm, setShowUsernameForm, setShowUseraddressesSection, setShowUpdateAddressForm, setShowAddNewAddressForm }: Props) => {

    const [isOldPasswordActive, setisOldPasswordActive] = useState<boolean>(false)
    const [isNewPasswordActive, setisNewPasswordActive] = useState<boolean>(false)
    const [isConfirmPasswordActive, setisConfirmPasswordActive] = useState<boolean>(false)
    const [PasswordForm, setPasswordForm] = useState<PasswordData>({ oldPassword: '', newPassword: '', confirmPassword: '' })
    
    const handleChange = ( e: React.FormEvent<HTMLInputElement>, setIsActive: React.Dispatch<React.SetStateAction<boolean>> ) => {
        const target = e.target as HTMLInputElement
        setPasswordForm({
            ...PasswordForm,
            [target.name]: target.value
        });
      
        if (target.value !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
    }
    
    const handleSubmit = (event: React.FormEvent) => {

    }
    
  return (
    <div className={ShowUserpasswordForm ? "w-[570px] h-fit overflow-hidden pb-2 mt-5" : "w-[570px] h-fit overflow-hidden border-b border-zinc-300 pb-2 mt-5"}>

    <button className="w-full flex justify-between items-center text-xl font-medium px-1 text-darkertrendygreen" onClick={() => {
        setShowUserpasswordForm(prev => !prev)
        setShowUsernameForm(false)
        setShowUseraddressesSection(false)
        setShowUpdateAddressForm(false)
        setShowAddNewAddressForm(false)
    }}>
        Change your password
        <IconContext.Provider value={{ className: ShowUserpasswordForm ? 'rotate-180 transition-all' : "rotate-0 transition-all"}}>
            <IoIosArrowDown />
        </IconContext.Provider>
    </button>

    <form className={ShowUserpasswordForm ? "w-[450px] h-fit pb-14 grid max-h-[1000px] overflow-hidden transition-all duration-300" : "w-[450px] h-fit grid max-h-0 overflow-hidden transition-all duration-300"} onSubmit={handleSubmit}>

    

    <div className="flex flex-col floatingLabel w-full relative mt-10">
            <input type="text" name="oldPassword" id="oldPassword" value={PasswordForm.oldPassword} onChange={e => handleChange( e, setisOldPasswordActive )} />
            <label htmlFor="oldPassword" className={ isOldPasswordActive ? "Active" : ""}>Current password</label>
    </div>

    <div className="flex flex-col floatingLabel w-full relative mt-7">
            <input type="text" name="newPassword" id="newPassword" value={PasswordForm.newPassword} onChange={e => handleChange( e, setisNewPasswordActive )} />
            <label htmlFor="newPassword" className={ isNewPasswordActive ? "Active" : ""}>New password</label>
    </div>

    <div className="flex flex-col floatingLabel w-full relative mt-7">
            <input type="text" name="confirmPassword" id="confirmPassword" value={PasswordForm.confirmPassword} onChange={e => handleChange( e, setisConfirmPasswordActive )} />
            <label htmlFor="confirmPassword" className={ isConfirmPasswordActive ? "Active" : ""}>Confirm new password</label>
    </div>

    <button type="submit" className="w-fit rounded bg-trendygreen px-7 h-10 shadow-trendygreen/20 text-white font-medium shadow-modern mx-auto mt-10">Save</button>

    </form>

</div>
  )
}

export default PasswordSettings