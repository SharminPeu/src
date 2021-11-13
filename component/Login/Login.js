import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../Context/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const google_icon = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    const location = useLocation();
    const history = useHistory(); 
    const redirect_uri = location?.state?.from || '/';
    const {handleEmail, handlePassword, handleLogin, handleGoogleLogin} = useAuth();
   


    const handleGoogleSignin = () =>{
        handleGoogleLogin()
        .then(result =>{
            history.push(redirect_uri);
        })
    }


    return (
        <div className='pb-5'>
           <form className='bg-success p-5'>
               <input type='email' className='p-2 my-3 w-50' required placeholder='Enter Email' onBlur={handleEmail}/>
               <br/>
               <input type='password' className='p-2 my-3 w-50' required placeholder='Enter password' onBlur={handlePassword}/>
               <br/>
               <button type='submit' className='btn btn-danger' onClick={handleLogin}>Submit</button>


               
           </form>

           <Link to='/register'><h3 className='mt-4 text-danger'>Don't Have An Account? Register Now!!! </h3></Link>

           
           <br/>
           <button className='btn btn-danger text-white' onClick={handleGoogleSignin}>{google_icon} Login With Google</button>



        </div>
    );
};

export default Login;