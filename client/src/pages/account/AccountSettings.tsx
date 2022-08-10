import axios, { AxiosError, AxiosResponse } from "axios"
import React, { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { IoIosArrowDown } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { UserAddress } from "../../services/authentication"
import AddressesSettings from "../../components/AddressesSettings"
import PasswordSettings from "../../components/PasswordSettings"
import UserInfoSettings from "../../components/UserInfoSettings"


const AccountSettings = () => {

    const { Auth,setAuth } = useAuth()

    
    const [ShowUsernameForm, setShowUsernameForm] = useState<boolean>(true)
    const [ShowUseraddressesSection, setShowUseraddressesSection] = useState<boolean>(false)
    const [ShowUserpasswordForm, setShowUserpasswordForm] = useState<boolean>(false)
    const [ShowAddNewAddressForm, setShowAddNewAddressForm] = useState<boolean>(false)
    const [ShowUpdateAddressForm, setShowUpdateAddressForm] = useState<boolean>(false)
    const [AddNewAddressForm, setAddNewAddressForm] = useState<UserAddress>({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })

    
  return (
    <div className="flex-1">

        <UserInfoSettings 
        ShowUsernameForm={ShowUsernameForm}
        setShowUsernameForm={setShowUsernameForm} 
        setShowUseraddressesSection={setShowUseraddressesSection} 
        setShowUserpasswordForm={setShowUserpasswordForm} 
         />

        <PasswordSettings
        ShowUserpasswordForm={ShowUserpasswordForm}
        setShowUserpasswordForm={setShowUserpasswordForm}
        setShowUsernameForm={setShowUsernameForm}
        setShowUseraddressesSection={setShowUseraddressesSection}
        setShowUpdateAddressForm={setShowUpdateAddressForm}
        setShowAddNewAddressForm={setShowAddNewAddressForm}
        />

        <AddressesSettings 
        ShowUseraddressesSection={ShowUseraddressesSection} 
        ShowAddNewAddressForm={ShowAddNewAddressForm} 
        ShowUpdateAddressForm={ShowUpdateAddressForm} 
        AddNewAddressForm={AddNewAddressForm} 
        setShowUsernameForm={setShowUsernameForm} 
        setAddNewAddressForm={setAddNewAddressForm} 
        setShowUseraddressesSection={setShowUseraddressesSection} setShowUserpasswordForm={setShowUserpasswordForm} 
        setShowAddNewAddressForm={setShowAddNewAddressForm} setShowUpdateAddressForm={setShowUpdateAddressForm} 
        />
       
    </div>
  )
}

export default AccountSettings