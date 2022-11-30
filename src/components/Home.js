
import React from 'react'

const Home = () => {
  return (
    <div>
        
        <div className="addtocart">

             <img src="https://cdn-icons-png.flaticon.com/512/70/70021.png" alt=""  className='cart-image'/>

        </div>

        <div className='cartWrapper'>
            <div className='image-wrapper item'>
                <img src="https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile4/P35953/heroimage/143993-v4-apple-iphone-14-mobile-phone-large-1.jpg" 

                alt=""className="images"/>

                
            </div>
            <div className='text-wrapper item'>

                <span>
                    I-phone
                </span>
                <span>
                    Price: $1000
                </span>

            </div>

            <div className="btn-wrapper item">

             <button>Add to Cart</button>
            </div>
        </div>


    </div>
  )
}

export default Home