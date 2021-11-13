import React, { useRef } from 'react';

const AddNewItem = () => {
    const titleRef = useRef();
    const priceRef = useRef();
    const brandRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();

    const addNewProduct = (e) =>{
        e.preventDefault();
        const product ={
            title: titleRef.current.value,
            price: priceRef.current.value,
            brand: brandRef.current.value,
            type: typeRef.current.value,
            description: descriptionRef.current.value,
            image: imageRef.current.value
        }

        fetch('https://floating-woodland-55461.herokuapp.com/addNewItem',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('Item Added Successfully');
                e.target.reset();
            }
        })
    } 

    return (
        <div>
            <form className='text-center py-5 bg-success ' onSubmit={addNewProduct}>
               
                <input type='text' placeholder='Enter Product Title' ref={titleRef} className='w-25 mb-4' />
                <br/>
                <input type='number' placeholder='Enter Product Price' ref={priceRef} className='w-25 mb-4' />
                <br/>
                <input type='text' placeholder='Enter Product Brand' ref={brandRef} className='w-25 mb-4' />
                <br/>
                <input type='text' placeholder='Enter Product Type' ref={typeRef} className='w-25 mb-4' />
                <br/>
                <input type='text' placeholder='Enter Product Description' ref={descriptionRef} className='w-25 mb-4' />
                <br/>
                <input type='text' placeholder='Enter Product Image URL' ref={imageRef} className='w-25 mb-4' />
                <br/>
                <button className='btn btn-warning my-3' type='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default AddNewItem;