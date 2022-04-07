import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faCoffee, faDiamond, faSpoon, faTrain } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faJenkins } from '@fortawesome/free-brands-svg-icons';

const Offer = () => {
    return (
        <div className='mb-28'>
            <h1 className='text-4xl text-red-500 font-bold p-10 text-center'>What We Offer</h1>
<div className='flex justify-around'>
    <div className='p-10'>
      <h1 className='text-2xl font-bold p-5'><span className='mr-5 text-3xl text-red-500'><FontAwesomeIcon icon={faCalendar} /></span> Diverse Location</h1>
      <p className='px-10 text-gray-500'>Wandering through Rome and you little stumbled upon everywhere you go as there’s some ancient column or area that built around. In fact, it takes so long to build anything in the city because every time they try to build a subway, building, or change something, they stumble across new ruins and have to send in the archeologists to investigate.</p>
    </div>
    <div className='p-10' >
    <h1 className='text-2xl font-bold p-5'> <span className='mr-5 text-3xl text-red-500'><FontAwesomeIcon icon={faTrain} /></span>Adventure time</h1>
      <p  className='px-10 text-gray-500'>Wandering through Rome and you little stumbled upon everywhere you go as there’s some ancient column or area that built around. In fact, it takes so long to build anything in the city because every time they try to build a subway, building, or change something, they stumble across new ruins and have to send in the archeologists to investigate.</p>
    </div>
    <div className='p-10'>
    <h1 className='text-2xl font-bold p-5'><span className='mr-5 text-3xl text-red-500'><FontAwesomeIcon icon={faCalculator} /></span>Fast booking</h1>
      <p  className='px-10 text-gray-500'>Wandering through Rome and you little stumbled upon everywhere you go as there’s some ancient column or area that built around. In fact, it takes so long to build anything in the city because every time they try to build a subway, building, or change something, they stumble across new ruins and have to send in the archeologists to investigate.</p>
    </div>
</div>
<div className='flex justify-around'>
    <div className='p-10'>
      <h1 className='text-2xl font-bold p-5'><span className='mr-5 text-3xl text-red-500'><FontAwesomeIcon icon={faJenkins} /></span>Incredible journey</h1>
      <p className='px-10 text-gray-500'>Wandering through Rome and you little stumbled upon everywhere you go as there’s some ancient column or area that built around. In fact, it takes so long to build anything in the city because every time they try to build a subway, building, or change something, they stumble across new ruins and have to send in the archeologists to investigate.</p>
    </div>
    <div className='p-10' >
    <h1 className='text-2xl font-bold p-5'> <span className='mr-5 text-3xl text-red-500'><FontAwesomeIcon icon={faDiamond} /></span>Traveling Together</h1>
      <p  className='px-10 text-gray-500'>Wandering through Rome and you little stumbled upon everywhere you go as there’s some ancient column or area that built around. In fact, it takes so long to build anything in the city because every time they try to build a subway, building, or change something, they stumble across new ruins and have to send in the archeologists to investigate.</p>
    </div>
    <div className='p-10'>
    <h1 className='text-2xl font-bold p-5'><span className='mr-5 text-3xl text-red-500'><FontAwesomeIcon icon={faLightbulb} /></span>Away We Go </h1>
      <p  className='px-10 text-gray-500'>Wandering through Rome and you little stumbled upon everywhere you go as there’s some ancient column or area that built around. In fact, it takes so long to build anything in the city because every time they try to build a subway, building, or change something, they stumble across new ruins and have to send in the archeologists to investigate.</p>
    </div>
</div>
        </div>
    );
};

export default Offer;