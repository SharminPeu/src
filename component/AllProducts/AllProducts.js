import React, { useEffect, useState } from 'react';
import ExploreProduct from '../ExploreProduct/ExploreProduct';



const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        fetch('https://floating-woodland-55461.herokuapp.com/allProducts')
        .then(res=>res.json())
        .then(data => setAllProducts(data))
      },[])
    // console.log(allProducts);
    return (
       
        <div className='bg-secondary'>
          
            <div className='container mx-auto row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gx-0'>
           
            {
                allProducts.map(allProduct => <ExploreProduct
                
                    key={allProduct._id}
                    allProduct={allProduct}

                ></ExploreProduct> )
            }
          
            
        </div>
        </div>
        
    );
};

export default AllProducts;