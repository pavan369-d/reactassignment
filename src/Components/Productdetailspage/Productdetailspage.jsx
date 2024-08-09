
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Bestseller from '../Home/Bestseller/Bestseller'
import heart from '/Images/heartpng.png'
import icondelivery from '/Images/icondelivery.png'
import iconreturn from '/Images/Iconreturn.png'
import reviews from '/Images/joystickreviews.png'
import joyStick from '/Images/redjoystick.png'
const Productdetailspage = () => {
    const [productCount,setProductCount]=useState(1);
    const breadcrumbitems=[
        {label:'Home', path:'/',active:false},
        {abel:'Gaming', path:'/gaming',active:true},
       
        
    ]
  return (
    <div className='product-detail-wrapper'>
        <div className="breadcrumb-float-productdetail breadcrumb-float">

        <Breadcrumb
        items={breadcrumbitems}
      />
        </div>
      <div className="product-details-container">
        <div className="product-image-view">
            <img src={joyStick} alt="" />
        </div>
        <div className="product-detail-description">
            <h2>Havic HV G-92 Gamepad</h2>
            <img src={reviews} alt="" className='product-detail-review'/>
            <p className='product-detail-price'>
            $192.00
            </p>
            <p className="product-detail-desc">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>
            <div className="horizontal-line-products"></div>
            <h3 className='.product-color-selec'>
                <div className="flex-24-color">
                <span>Colours: </span>
               <div> <input type="radio" className='input-color-green' name='color' /></div>
                <div><input type="radio" className='input-color-red' name='color' /></div>
                </div>
            </h3>
            <p className='product-size-selector'><p>Size: </p>
                <span>XS</span>
             <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span></p>
            <div className="product-count">
                <div className="count-btns">
                    <button onClick={()=>setProductCount(productCount>0?productCount-1:0)}>-</button>
                    <span className='count-no'>{productCount}</span>
                    <button onClick={()=>setProductCount(productCount+1)}>+</button>
                </div>
                <div className="buy-btn-product">
                    <button>Buy Now</button>
                    <div className="like-btn">
                        <img src={heart} alt="" />
                    </div>
                </div>
            </div>
            <div className="product-delivery">
                <div className="delivery-type">
                    <Link to="/productdetailpage">
                    <img src={icondelivery} alt="" />
                    </Link>
                    <div className="delivery-info">
                        <h3>Free Delivery</h3>
                        <p>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
                <div className="horizontal-line-delivery"></div>
                <div className="delivery-type">
                    <img src={iconreturn} alt="" />
                    <div className="delivery-info">
                        <h3>Return Delivery</h3>
                        <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
        </div>
      
      </div>
        <Bestseller
       carouselText={'Related Products'}
       mainText={''}
       viewAll={false}
       slider={false}/>
     
    </div>
  )
}

export default Productdetailspage
