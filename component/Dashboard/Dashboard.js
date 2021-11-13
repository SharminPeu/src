import React, { useState } from 'react';
import useAuth from '../Context/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import AddNewItem from './AddNewItem/AddNewItem';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './ManageAllProducts/ManageAllProducts';
import Pay from './Pay/Pay';
import Review from './Review/Review';








const Dashboard = () => {
    const {user, admin, handleLogOut} = useAuth();
    const [control,setControl] = useState('My Orders');
    // console.log(control);
    
    return (
        <div className='pb-5'>
            <h1 className='py-5 text-center text-danger'>{user.email}</h1>

            <div className='row mx-auto container'>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 '>
                  {
                      !admin && 
                      <div className='d-flex flex-column'>

                 
                      <button className='w-25 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Pay')}>Pay</button>

                      <button className='w-25 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('My Orders')}>My Orders</button>
                      <button className='w-25 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Review')}>Review</button>
                      <button className='w-25 my-3 mx-auto btn btn-danger ' onClick={handleLogOut}>Logout</button>

                      </div> 
                  }  

                  {
                      admin && 

                      <div className='d-flex flex-column'>

                 
                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Manage All Orders')}>Manage All Orders</button>

                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Add a Product')}>Add a Product</button>
                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Make Admin')}>Make Admin</button>
                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Manage Products')}>Manage Products</button>
                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={handleLogOut}>Logout</button>

                      </div> 
                  }

                   

                </div>
                <div className='col-lg-9 col-md-9 col-sm-12 col-12'>
                    {
                        control === 'Manage All Orders' && <ManageAllOrders></ManageAllOrders>
                    }

                    {
                        control === 'Add a Product' && <AddNewItem></AddNewItem>
                    }

                    {
                        control ==='Make Admin' && <MakeAdmin></MakeAdmin>
                    }
                    {
                        control === 'Manage Products' && <ManageAllProducts></ManageAllProducts>
                    }
                    {
                        control ==='Pay' && <Pay></Pay>
                    }
                    {
                        control === 'My Orders' && <MyOrder></MyOrder>
                    }
                    {
                        control === 'Review' && <Review></Review>
                    }



                </div>

            </div>
           


           


            
        </div>

        
    );
};

export default Dashboard;