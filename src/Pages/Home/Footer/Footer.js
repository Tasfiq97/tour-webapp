import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-around bg-black p-5 text-white'>
            <div className='w-1/3 mt-8'>
                <h1 className='text-2xl font-bold'>our awards</h1>
               <p className='mt-4'>Our Awards
London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold mb-5 mt-8'>contact info</h2>
                <p>+88018128121</p>
                <p>mon-friday </p>
                <p>sunday closed</p>
            </div>
        </div>
    );
};

export default Footer;