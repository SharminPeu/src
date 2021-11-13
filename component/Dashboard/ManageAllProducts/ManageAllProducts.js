import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://floating-woodland-55461.herokuapp.com/allProducts')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    const deleteProduct =(id)=>{
        // console.log(id);
        fetch(`https://floating-woodland-55461.herokuapp.com/deleteProducts/${id}`,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.deletedCount>0){
                alert('Product Deleted Successfully')
                const newProducts = products.filter(productss=> productss._id !==id)
                setProducts(newProducts);
            }
        })
    }

// console.log(products);

    return (
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 container mx-auto g-0'>
            {
                products.map(product =>
                    <div className='col my-3' key={product._id}>
                     
  
    <div className="card h-100 bg-success text-white">
      <img src={product.image} className="card-img-top w-50 mx-auto" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name: {product.title}</h5>
        <p className="card-text">Brand: {product.brand}</p>
        <p className="card-text">Category: {product.type}</p>
        <p className="card-text">Price: ${product.price}</p>
        <button className='btn btn-danger' onClick={()=>deleteProduct(product._id)}>Delete Product</button>
      </div>
    </div>
 

  
 





                    </div>)
            }
            
        </div>
    );
};

export default ManageAllProducts;