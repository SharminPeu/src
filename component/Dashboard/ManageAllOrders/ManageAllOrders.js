import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const[orders,setOrders]= useState([]);
    useEffect(()=>{
        fetch('https://floating-woodland-55461.herokuapp.com/manageAllOrders')
        .then(res=> res.json())
        .then(data => setOrders(data))
    },[])

    const UpdateOrderStatus = (id) =>{
        // console.log(id);

        const orderId = {
            _id: id
        }


        fetch('https://floating-woodland-55461.herokuapp.com/updateOrderStatus',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert('Order Updated Successfully');

            }
        })

    }


    return (
        <div className='container row g-0 mx-auto py-3'>
            {
                orders.map(order =>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-12 text-white mb-4' key={order._id}>
                        <div className="card bg-success">
  <img src={order.image} className="card-img-top w-50 mx-auto" alt="..."/>
  <div className="card-body">
    <p className="card-text">User Mail: {order.email}</p>
    <p className="card-text">Name: {order.title}</p>
    <p className="card-text">Brand: {order.brand}</p>
    <p className="card-text">Category: {order.type}</p>
    <p className="card-text">Description: {order.description}</p>
    <h5 className="card-text">Status: {order.status}</h5>
    <button className='btn btn-warning mt-3' onClick={()=>UpdateOrderStatus(order._id)}>Update</button>

  </div>
</div>
                        
                    </div>)
            }
            
        </div>
    );
};

export default ManageAllOrders;