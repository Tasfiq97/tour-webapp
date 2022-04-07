import React from 'react';
import register from "../../Images/6990.jpg"
const Login = () => {
    return (
       <div className='flex justify-between '>
            <div className=' bg-gray-200 h-screen p-28 w-1/2'>
            <h2 className='text-3xl font-bold mb-5 '>Log in</h2>
            <input className='w-3/4 px-2 py-2 mt-8 ' type="email" placeholder='enter email' /><br />
            <input className='w-3/4 px-2 py-2  mt-8' type="password" placeholder='enter password'  /><br/>
            <button className='text-2xl mt-10 border-2 px-6 py-2 bg-red-400 '>Submit</button>
            {/* <button className='text-2xl mt-10 border-2 border-amber-50 p-4 '>Google sign in</button> */}
            </div>
            <div className='w-1/2'>
 <img  src={register} alt="" />
            </div>
        </div>
    );
};

export default Login;