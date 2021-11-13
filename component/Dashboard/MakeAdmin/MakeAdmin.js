import React, { useRef } from 'react';

const MakeAdmin = () => {
    const emailRef = useRef();
    const makeUserAdmin = (e) =>{
        e.preventDefault();
        const userEmail = {
            
            email: emailRef.current.value
  
        }

       fetch('https://floating-woodland-55461.herokuapp.com/addRole',{
           method: 'PUT',
           headers:{
                'content-type':'application/json'
           },
           body: JSON.stringify(userEmail)
       })
       .then(res =>res.json())
       .then(data => {
           if(data.modifiedCount>0){
               alert('User Role Update Successfully');
               e.target.reset();
           }
       })

    }


    return (
        <div>
            <form className='text-center py-5 bg-success' onSubmit={makeUserAdmin}>
                <input className='p-2 w-50' placeholder='Enter User Email:' type='email' required ref={emailRef}  />
                <button type='submit' className='btn btn-danger px-3 py-2'>Submit</button>

            </form>
            
        </div>
    );
};

export default MakeAdmin;