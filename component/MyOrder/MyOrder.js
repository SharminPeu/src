import React, { useState,useEffect } from 'react';
import useAuth from '../Context/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    // console.log(user?.email);
    const [myOrder,setMyOrder] = useState([]);
    useEffect(()=>{
        fetch(`https://floating-woodland-55461.herokuapp.com/myOrder/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrder(data))
    },[user.email])

    // console.log(myOrder);

    const deleteProduct = (id) =>{
        fetch(`https://floating-woodland-55461.herokuapp.com/deleteProduct/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data  => {
            if(data.deletedCount>0){
                alert('Data Deleted Successfully');
                const newMyOrder = myOrder.filter(newOrder => newOrder._id !== id)
                setMyOrder(newMyOrder);
            }
        })

    }



    return (
        <div className='container row mx-auto g-0 pt-5'>
            {
                myOrder.map(order=>
                    <div className="card mb-3 bg-success text-white" key={order._id}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={order.image} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8 my-auto">
                        <div className="card-body">
                          <h5 className="card-title">Name: {order.title}</h5>
                          <p className="card-text">Brand: {order.brand}</p>
                          <p className="card-text">Type: {order.type}</p>
                         
                          <p className="card-text">Description: {order.description}</p>
                          <h5 className="card-text">Status: {order.status}</h5>
                          <div className='text-center pt-3'>
                              <button className='btn btn-danger mt-5' onClick={()=>deleteProduct(order._id)}>Delete</button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>   )
            }
            
            
        </div>
    );
};

export default MyOrder;