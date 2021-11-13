import React from 'react';


const Footer = () => {

    const contact =(e) =>{
        e.preventDefault();
        alert('Thank You For Communicating With us.')
        e.target.reset();
    }

    return (
        <div className='py-5 text-center bg-secondary'>
            <h1 className='py-4 text-white'>For Any Additional Enquiries, Feel Free To Ask Us.   </h1>
            <form onSubmit={contact}>
                <input type='email' required placeholder='Enter Your Email' className='px-3 py-2 mb-4' />
                <br/>
                <textarea placeholder='Enter Your Enquiry' className='px-3 py-2 mb-4 w-50'></textarea>
                <br/>
                <button className='btn btn-primary px-3 py-2' type='submit'>Post</button>


            </form>


            
        </div>
    );
};

export default Footer;