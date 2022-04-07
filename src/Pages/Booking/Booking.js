
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import Navbar from '../Home/Navbar/Navbar';

const Booking = () => {
    const {bookId}=useParams();
    const {user}=useFirebase();
    const [tours,setTours]= useState({});
    useEffect(()=>{
      axios.get(`http://localhost:5000/tours/${bookId}`)
      .then(result=>setTours(result.data));
        
    },[tours])
    const handleConfirm=()=>{
      const obj={};
      obj.booking=tours;
    obj.userName=user.displayName;
    obj.email=user.email;
        
      axios.post("http://localhost:5000/booking",obj)
      .then(result=>{
          if(result.data.insertedId){
              alert("your booking is done")
          }
      });
    }
    return (
        <div  className='h-screen'>
            <div>
                <Navbar></Navbar>
            </div>
        <div className='flex flex-col items-center mt-28'>
        <h1  className='p-10  text-6xl'><span className='text-white bg-red-500 p-5'>Congratulations!!</span> {user.displayName}</h1>
            <p className='text-3xl mt-10'>You are one step ahead of Booking</p>
            <button  onClick={()=>handleConfirm(user.displayName,user.email)} className='text-4xl text-white  border-2 px-6 py-5 border-amber-50 bg-red-600 mt-20'>Confirm to Book</button>
        </div>
        </div>
    );
};

export default Booking;