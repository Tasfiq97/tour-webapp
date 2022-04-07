import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTours = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:5000/tours",data)
        .then(result=>{
            if(result.data.insertedId){
                alert("your tour has been added")
                reset();
            }
        });
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-gray-200'>
            <h1 className='text-center text-red-500 text-4xl py-10 font-extrabold'>Add Tours</h1>
            <div className='text-center  p-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input className='w-1/3 p-2 mt-5 mb-5 bg-white text-black'  {...register("id" )} placeholder="id" /> <br />
      <input  className='w-1/3 p-2 mt-5 mb-5 bg-white ' {...register("name",)} placeholder="name"/> <br />
      <input  className='w-1/3 p-2 mt-5 mb-5 bg-white ' {...register("person",)} placeholder="people number"/> <br />
      <input  className='w-1/3 p-2 mt-5 mb-5 bg-white ' {...register("shortDes",)} placeholder="shortDescription"/> <br />
      <input  className='w-1/3 p-2 mt-5 mb-5 bg-white ' {...register("description",)} placeholder="description"/> <br />
      <input className='w-1/3 p-2 mt-5 mb-5 bg-white '  {...register("departure",)} placeholder="departure"/> <br />
      <input className='w-1/3 p-2 mt-5 mb-5 bg-white ' {...register("returnTime",)} placeholder="returnTime"/> <br />
      <input className='w-1/3 p-2 mt-5 mb-5 bg-white ' {...register("included",)} placeholder="included"/> <br />
      <input className='w-1/3 p-2 mt-5 mb-5 bg-white '{...register("phone",)} placeholder="phone"/> <br />
      <input className='w-1/3 p-2 mt-5 mb-5 bg-white '{...register("img",)} placeholder="img"/> <br />
      <input className='w-1/3 p-2 mt-5 mb-5 bg-white '{...register("img2",)} placeholder="img2"/> <br />
      <input  className='w-1/3 p-2 mt-5 mb-5 bg-white 'type="number" {...register("price",)} placeholder="price" /> <br />
      <input  className='text-xl text-white font-bold mt-8 mb-10 border-2 px-6 py-2 border-amber-50 bg-red-600' type="submit" />
    </form>
            </div>
            </div>
        </div>
    );
};

export default AddTours;