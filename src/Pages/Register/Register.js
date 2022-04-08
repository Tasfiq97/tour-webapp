import React from 'react';
import useAuth from '../../Hooks/useAuth';
import register from "../../Images/6990.jpg"
import Navbar from '../Home/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const {signUpWithGoogle}=useFirebase();
    const location=useLocation();
    const navigate=useNavigate()
    const redirect=location.state?.from || "/home"
    const handleGoogleLogin=()=>{
signUpWithGoogle().then(result=>{
       navigate(redirect);
})
    }
    return (
        <div>
            <Navbar className="text-red-800"></Navbar> 
        <div className='flex justify-between '>
            <div className=' bg-gray-200 h-screen p-28 w-1/2 flex items-center flex-col'>
            <h2 className='text-3xl font-bold mb-5 mt-32 '>Please Sign in</h2>
            <button    onClick={handleGoogleLogin} className='text-2xl text-white font-bold mt-5 border-2 px-16 py-4 border-amber-50 bg-red-600 '> <FontAwesomeIcon style={{color:"black",marginRight:"1rem",fontWeight:"bold"}} icon={faGoogle}  />  <span>sign in  <ToastContainer /></span></button>
            </div>
            <div className='w-1/2'>
 <img  src={register} alt="" />
            </div>
            
            
        </div>
        </div>
    );
};

export default Register;