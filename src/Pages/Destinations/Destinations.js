
import React from 'react';
import egypt from "../../Images/simon-berger-boyXZfqpwpU-unsplash.jpg";
import cuba from "../../Images/leonard-cotte-R5scocnOOdM-unsplash.jpg";
import paris from "../../Images/dorothea-oldani-_Jkoj5toA7M-unsplash.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faPeopleLine } from '@fortawesome/free-solid-svg-icons';

const Destinations = () => {
   
    return ( 
        <div  className='mt-10 mb-32 shadow-gray-400'>
            <h1 className='text-5xl font-bold mt-20 text-center mb-16'>Most Popular Tours</h1>
            <div className='flex justify-between p-5'>
            <div className="overflow-hidden">
        <img  className='h-3/3 p-4 hover:scale-105 ease-in duration-500 ' src={egypt} alt="" />
       <div className='flex justify-around p-5'>
       <h1 className='text-3xl font-bold text-center'>Egypt</h1>
      <p className='text-xl text-gray-500'> visited <FontAwesomeIcon className='text-4xl ml-4 mr-4' icon={faPeopleGroup}></FontAwesomeIcon> 230</p>
       </div>
       <p className='ml-24 mt-3 text-xl font-bold text-gray-400'>7.5  +ratings</p>
            </div>
            <div>
            <img className='h-3/3 p-4 hover:scale-105 ease-in duration-500'  src={cuba} alt="" />
            <div className='flex justify-around p-5 '>
       <h1 className='text-3xl font-bold text-center'>Paris</h1>
      <p className='text-xl text-gray-500'> visited <FontAwesomeIcon className='text-4xl ml-4 mr-4' icon={faPeopleGroup}></FontAwesomeIcon> 400</p>
       </div>
       <p className='ml-24 mt-3 text-xl font-bold text-gray-400'>7.7  +ratings</p>
            </div>
            <div>
            <img  className='h-3/3 p-4 hover:scale-105 ease-in duration-500' src={paris} alt="" />
            <div className='flex justify-around p-5 '>
       <h1 className='text-3xl font-bold text-center'>Cuba</h1>
      <p className='text-xl text-gray-500'> visited <FontAwesomeIcon className='text-4xl ml-4 mr-4' icon={faPeopleGroup}></FontAwesomeIcon> 100</p>
       </div>
       <p className='ml-24 mt-3 text-xl font-bold text-gray-400'>7.1 +ratings</p>
            </div>
            <div>
                
            </div>
            </div>
        </div>
    );
};

export default Destinations;