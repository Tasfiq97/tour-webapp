import React from 'react';
import bg from "../../../Images/banner.jpg"
import Navbar from '../Navbar/Navbar';

const Banner = () => {
    return (
        <div>
            <div className='h-screen' style={{background:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundAttachment:"fixed"}} >
       <Navbar></Navbar>
               <div className='flex flex-col justify-center items-center h-full '>
                <h1 className='text-6xl  text-white p-5 font-bold'>Gtour for you</h1>
                <p  className='text-xl  text-white  p-5 font-bold'>you can book any tour </p>
               </div>

            </div>
        </div>
    );
};

export default Banner;