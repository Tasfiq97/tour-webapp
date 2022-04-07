import React from 'react';
import { Link } from 'react-router-dom';

const SingleTour = ({data}) => {
    const{_id,name,img,shortDes,price,id}=data;
   
    return (
        <div  className='p-10 mb-10  ' >
            <Link to={`/tour/${_id}`}>
            <img className='h-2/3 cursor-pointer hover:scale-105 ease-in duration-500 hover:overflow-hidden' src={img} alt="" />
            <div className='bg-gray-200 px-10 py-10 flex cursor-pointer'>
           <div>
           <h1 className='text-3xl mb-5'>{name}</h1>
             <p className='text-gray-600'>{shortDes}</p>
             <p className='bg-red-500 w-28 font-bold text-white text-2xl mt-5 p-3'>${price}</p>
           </div>
            </div>
            </Link>
        </div>
    );
};

export default SingleTour;