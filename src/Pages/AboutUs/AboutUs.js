import React from 'react';
import team from "../../Images/samrat-khadka-zhNFWk__mSQ-unsplash.jpg";


const AboutUs = () => {
   
    return (
        <div className='bg-gray-100'>
            <h1 className='text-center text-6xl text-red-500 font-bold p-16'>About Us</h1>
            <div className='flex items-center p-10'>
                <div >
           <img className='border-2 rounded-t-full' src={team} alt="" />
                </div>
                <div className='p-16 mt-10 '>
               <h1 className='text-2xl text-gray-600 font-bold p-2'>Our people comes first </h1>
               <p className='leading-9 '>our company was founded on the belief that business can be a force for good and that the single actions of individual people, collectively, have the power to change the world. As both a public benefit corporation and Certified B Corp,  we also work to stop plastic pollution at its source by educating people about this global crisis and empowering them to end their dependence on single-use plastic.Every 4ocean product purchased comes with our One Pound Promise to pull one pound of trash from the ocean, rivers, and coastlines. Every pound pulled helps fund our global ocean cleanup operation, supports a growing movement to end the world’s reliance on single-use plastic, and advances our mission to end the ocean plastic crisis.</p>
                </div>
                <div>
      </div>
            </div>
        </div>
    );
};

export default AboutUs;