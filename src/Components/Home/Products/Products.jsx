import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/action.js';
import Carousel from '../../Carousel/Carousel.jsx';
import Rating from '../../Rating/Rating.jsx';
import '../home.css';
import eyePng from '/Images/eyepng.png';
import heartPng from '/Images/heartpng.png';
const Products = ({newEndTime,timecount,setTimeCount,productData,remainingDays,remainingHours,remainingMinutes,remainingSeconds}) => {
 const [isLiked,setIsLiked]=useState(false);
  const dispatch=useDispatch();
  // console.log(productData);
  const handleLike=()=>{
    setIsLiked(!isLiked)
    document.querySelector('.heartpng').style.color="red"
  }
  return (
   
    <div className='product-wrapper'>
       <Carousel
       mainText={'Flash Sales'}
       carouselText={
        `Today's`
       }
       viewAll={false}
        show={true}
        timecount={timecount}
        setTimeCount={setTimeCount}
        newEndTime={newEndTime}
       />
    <div className="products">
      {
      productData.map(item=>{
        return (
         
            <div key={item.id} className="product">
             <div className="imageOuterContainer">
             <div className="productImageContainer">
              <Link to="/productdetailpage">
              <img src={item.image} alt={item.title}  className="productImage"/>
              </Link>
              <div className="productIcons">
              <div className="icon_24">
              <img src={heartPng} alt="heart" className="heartpng" onClick={handleLike} />
              </div>
              <div className="icon_24">
              <img src={eyePng} alt="eye" className="heartpng" />
              </div>
              </div>
              </div>
             </div>
              <button onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
             
              <div className="productDescription">
                <p className="productDesc">{(item.title).slice(0,20)}..</p>
                <p className="productPricing"><span className="productPrice">{`$${item.price}`}</span></p>
              <div className="rating">
              <Rating noOfRating={Math.ceil(item.rating.rate)} />
              <div className="reviews">
                <span>{item.rating.reviews}</span>
              </div>

              </div>
              </div>

            </div>
            
        )
      })
      }
    </div>
     
      
    </div>
  
  )
}

export default Products
