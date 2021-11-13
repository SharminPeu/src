import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';


const Register = () => {
    const {handleEmail, handlePassword, handleRegister, handleName} = useAuth();
    return (
        <div>
            <form onSubmit={handleRegister} className='bg-success p-5'>
               <input type='text' className='p-2 my-3 w-50' required placeholder='Enter Name' onBlur={handleName}/>
               <br/>
               <input type='email' className='p-2 my-3  w-50' required placeholder='Enter Email' onBlur={handleEmail}/>
               <br/>
               <input type='password' className='p-2 my-3  w-50' required placeholder='Enter password' onBlur={handlePassword}/>
               <br/>
               <input className='bg-danger px-3 py-2 text-white' type='submit' required value='Submit' />
               
           </form>

           <Link to='/login'><h3 className='text-danger py-3'>Already Have An Account? Login!!!</h3></Link>
            
        </div>
    );
};

export default Register;