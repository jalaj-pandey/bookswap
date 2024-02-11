import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProviders";

const Logout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {logOut} = useContext(AuthContext)
    const handleLogout =()=>{
        logOut().then(()=>{
            alert("Sign out Successfully");
            navigate(from, {replace: true })
        }).catch((error) =>{

        })
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-teal-400 px-8 py-3 rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout