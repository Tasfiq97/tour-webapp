
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import SingleTour from './SingleTour';

const Tours = () => {
    const {user}=useFirebase()
const [datas,setDatas]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5000/tours")
      .then(result=>{
        setDatas(result.data)
        console.log(result);
      });
    },[user]);

    return (
        <div id='tours' className='mb-28 bg-gray-100'>
            <div>
            <h1 className='text-5xl text-center font-semibold py-16'>Tours destinations</h1>
            </div>
            <div className='grid grid-cols-3 p-8' >
                {
                    datas.map(data=><SingleTour
                    key={data._id}
                      data={data}
                    >
                    
                    </SingleTour>)
                }
            </div>

        </div>
    );
};

export default Tours;