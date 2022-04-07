
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const TourDetails = () => {
    const {tourId}=useParams();
    console.log(tourId);
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/tours`)
        .then(res=>res.json())
        .then(data=>setProducts(data));

    },[products])

     const selectedId=products.find(product=>product._id==tourId)|| {}
    
     const{_id,name,description,img,img2,person,phone,price, returnTime,included,departure}=selectedId

    return (
        <div>
           <div>
               <Navbar></Navbar>
           </div>
           <div >
               <img className='h-screen w-screen' src={img} alt="" />
        
           </div>
           <div className='flex justify-around items-center mt-20' >
              <h1 className='text-6xl p-5 font-bold'>{name}</h1>
            <h3 className='text-4xl text-white bg-red-500 p-5 font-bold mt-1 '>$:{price} for {person} person</h3>
               </div>
               <div className='p-5 mt-16 ml-20'>
                   <h1 className='text-4xl font-bold'>Day 1</h1>
                   <p className='w-2/3 text-xl mt-12  leading-10'>{description}</p>
                   <img className='p-10 w-2/3' src={img} alt="" />
               </div>
               <div className='p-5 mt-16 ml-20'>
                   <h1 className='text-4xl font-bold'>Day 2</h1>
                   <p className='w-2/3 text-xl mt-12 leading-10'>{description}</p>
                   <img className='p-10 w-2/3' src={img2} alt="" />
               </div>
               <div className='mt-10 px-20'>
                    <h1 className='p-5'><span className='text-2xl font-bold p-10'>Departure</span> <span className='ml-20 text-xl'>{departure}</span></h1>
                    <hr className='bg-gray-200 p-0.5 '/>
                    <h1 className='p-5'><span className='text-2xl font-bold p-10' >Return time</span><span className='ml-16 text-xl'> {returnTime}</span></h1>
                    <hr className='bg-gray-200 p-0.5 '/>
                    <h1 className='p-5'><span className='text-2xl font-bold p-10'>Included</span> <span
                    className='ml-16 text-xl'>{included}</span></h1>
                    <hr className='bg-gray-200 p-0.5 '/>
                    <h1  className='p-5'><span className='text-2xl font-bold p-10' >Phone</span>  <span
                    className='ml-28 text-xl'
                    >{phone}</span></h1>
               </div>
               <div className="ml-28 mt-10 mb-20">
              <Link to={`/book/${_id}`}>
              <button className='text-3xl font-bold text-white mt-2 border-2 px-6 py-2 border-amber-50 bg-red-600 mr-5'>Book this tour</button>
              </Link>
               </div>
        </div>
    );
};

export default TourDetails;