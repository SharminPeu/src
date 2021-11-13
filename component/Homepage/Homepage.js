import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

import "./Homepage.css";


const Homepage = () => {
  
  const [products,setProducts] = useState([]);
  const [reviews,setReviews] = useState([]);
  useEffect(()=>{
    fetch('https://floating-woodland-55461.herokuapp.com/allProducts')
    .then(res=> res.json())
    .then(data => setProducts(data))
  },[])

  const slicedProduct = products.slice(0,6);
  // console.log(slicedProduct);

  useEffect(()=>{
    fetch('https://floating-woodland-55461.herokuapp.com/findReview')
    .then(res=>res.json())
    .then(data=> setReviews(data))
  },[])

  



  


  return (
    
    
    <div className='bg-success'>
      
      
      
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0075/1832/2770/files/slider__3_2000x.jpg?v=1559292337" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0075/1832/2770/files/slider__2_2000x.jpg?v=1559288774" className="d-block img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0075/1832/2770/files/slider__1_2000x.jpg?v=1559284541" className="d-block img-fluid" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <div className='py-5'>
        <h1 className='py-4 text-center text-white'>Our Premium Watches Collection</h1>

        <div className=' container mx-auto row gx-0 gy-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
          
            {
              slicedProduct.map(sliced =>
                <div className="card" key={sliced._id}>
  <img src={sliced.image} className="card-img-top w-50 mx-auto" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Title: {sliced.title}</h5>
    <h5 className="card-title">Price: ${sliced.price}</h5>
    <p className="card-text">Category: {sliced.type}</p>
    <Link to={`/purchase/${sliced._id}`}>
            <button className='btn btn-success'>Purchase</button>

        </Link>
    
  </div>
</div>)
            }

          


        </div>


      </div>

      <div className='py-5'>
      <h1 className='pb-5 text-center text-white'>Feedbacks From Our valuable Customers</h1>
        <div className='container row gx-0 gy-4 mx-auto row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
          {
            reviews.map(review =>
              <div className="card" key={review._id}>
  
  <div className="card-body">
    <h5 className="card-title">User Email: {review.email}</h5>
    {/* <h5 className="card-title">User Name: {review.displayName}</h5> */}
    <p className="card-text">Comment: {review.comment}</p>
    <h4>Rating: <Rating
    
   
    initialRating={review.rating}
    readonly
    
   
    
    />
     
     
    </h4>
    
    
  </div>

  
  
</div>)
          }

        </div>


      </div>

      <div className='py-5 container'>
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Why Choose Timzee?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We have the latest collection of watches available in the globe.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Why are our watches expensive?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Our collection of watches are exclusive and some of the clocks are not available in other regions of the world. </strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How Can You For To purchase?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We are still implementing payment procedure. Hopefully users can pay using credit card, bkash, nagad etc. </strong> 
      </div>
    </div>
  </div>
</div>

  </div>




    </div>
  );
};

export default Homepage;
