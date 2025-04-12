import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    
    const {user} = useContext(UserContext);

    if(!user) return <p className='flex justify-center text-2xl mt-5'>Please Login</p>  

    return <p className='flex justify-center text-2xl mt-5'>Welcome {user.userName}</p>

}

export default Profile
