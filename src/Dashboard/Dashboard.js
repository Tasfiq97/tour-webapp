import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';
import Navbar from '../Pages/Home/Navbar/Navbar';

const Dashboard = () => {
    const {user}=useFirebase();
    const [data,setData]=useState([]);
    const[userData,setUserData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/allbook")
        .then(result=>setData(result.data))
        const filteredData=data.filter(data=>data.userName==user.displayName)||{}
    setUserData(filteredData);
    },[data])
    
    const handleDelete=(id)=>{
        
            fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE",
             headers:{"content-type":"application/json"},
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                 alert("your booking has been cancelled");
                 const remainning= userData.filter(data=>data._id!=id)
                 setUserData(remainning);
            }
        })
    }
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='mt-20'>
            <p  className='py-10 px-10 text-center'><span className='text-4xl font-bold bg-red-500 p-3 text-white '>{user.displayName} </span> <span className='text-3xl font-bold ml-5 '> Welcome to Your Dashboard</span></p>
            <div>
                <h1 className='text-5xl text-center font-bold text-red-400 p-10'> All Bookings</h1>
            </div>
            { 
            userData.map(items=>{
                return(
                    <div className='flex justify-around items-center border-4 p-5 mt-5 rounded mb-20'>
                <img className='w-1/3' src={items.booking.img} alt="" />
                <h1><span className='text-3xl text-red-500 font-bold'>{items.booking.name}</span></h1>
                <p className='text-xl'>$: <span className='font-bold'>{items.booking.price}</span></p>
                <button onClick={()=>handleDelete(items._id)}  className='text-2xl text-white  border-2 px-6 py-2 border-amber-50 bg-red-600 mr-5'>Cancel</button>
            </div>
                )
            })
            }
</div>
        </div>
    );
};

export default Dashboard;