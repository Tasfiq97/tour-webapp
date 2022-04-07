import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const {user,logOut}=useAuth();
    return (
        <div className='text-red-400 font-bold px-20 py-10 flex justify-between'>
            <div>
                <Link to="/"><h1 className='text-5xl font-bold'>GTOUR</h1></Link>
            </div>
            <div className='flex items-center text-xl'>
              <Link to="/home"><p className='px-8'>Home</p></Link>  
               <HashLink smooth to="/home#tours" > <p className='px-8'>Tours</p></HashLink>
                {
                    user.email?
                <div className='flex'>
                    <Link to="/addtours"> <p>Add Tours</p></Link>
                    <Link to="/dashboard"><p className='px-8'>Dashboard</p></Link>
                </div>:
                    <p className=''></p>
                }
                
                 { user.email?
                <button onClick={logOut} className='text-xl text-white font-bold mt-2 border-2 px-6 py-2 border-amber-50 bg-red-600 mr-5'>Logout</button>:
                <Link to="/register">Sign in</Link>
                    }
         { 
             user?.displayName 
            
         }
            </div>
        </div>
    );
};

export default Navbar;