import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProduct = (props) => {
    const {brand,image,price,title,type,_id} = props.allProduct;
    // console.log(props.allProduct);
    return (
        <div className="card mt-5 px-5 bg-success text-white">
  <div className="row g-0">
    <div className="col-md-5">
      <img src={image} className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Name: {title}</h5>
        <p className="card-text">Brand: {brand}</p>
        <p className="card-text">Category: {type}</p>
        <p className="card-text">Price: ${price}</p>
        <Link to={`/purchase/${_id}`}>
            <button className='btn btn-danger'>Purchase</button>

        </Link>
        
        
      </div>
    </div>
  </div>
</div>
    );
};

export default ExploreProduct;