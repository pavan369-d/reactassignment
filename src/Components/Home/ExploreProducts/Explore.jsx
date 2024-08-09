
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from '../../Carousel/Carousel';
import Rating from '../../Rating/Rating';
import eyePng from '/Images/eyepng.png';
import heartPng from '/Images/heartpng.png';
const Explore = ({uRL}) => {
    
    const [err,setErr]=useState(false);
    const [isLoad,setIsLoad]=useState(false);
    const [exploreData,setExploreData]=useState([])

    async function getExplore(url){
      setIsLoad(true)
        try{
            const Newdata=await axios.get(`${url}?limit=8`)
            const dataRes=await Newdata.data;
            setExploreData(dataRes);
            setIsLoad(false)
          }catch(error){
            alert(error);
            setErr(error);
        }
        finally{
          setIsLoad(false)
        }
    }

    useEffect(()=>{

        getExplore(uRL);
    },[])

    if(isLoad){
      return <div>Loading...</div>
    }
    if(err){
      return <div>Error: {err}</div>
    }

  return (
    <div className='exploreProduct-wrapper'>
     <Carousel
         carouselText={'Our Products'}
         mainText={'Explore Our Products'}
         viewAll={false}
         innerText={'View All'}
         />   
         <div className="exploreProducts">
      {
        exploreData.map((item)=>{
        return(
          <div key={item.id} className=" product exploreProduct">
          <div className="imageOuterContainer">
          <div className="productImageContainer">
           <img src={item.image} alt={item.title}  className="productImage"/>
           <div className="productIcons">
           <div className="icon_24">
           <img src={heartPng} alt="heart" className="heartpng" />
           </div>
           <div className="icon_24">
           <img src={eyePng} alt="eye" className="heartpng" />
           </div>
           </div>
           </div>
          </div>
           <button>Add To Cart</button>
           <div className="productDescription explore-description">
             <p className="productDesc explore-desc">{(item.title).slice(0,20)}..</p>
             <p className="productPricing"><span className="productPrice">{`$${item.price}`}</span></p>
           </div>
           <div className="rating">
              <Rating noOfRating={Math.ceil(item.rating.rate)} />
              <div className="reviews">
                <span>{item.rating.reviews}</span>
              </div>

              </div>
           {/* <div className="rating">
           <Rating noOfRating={item.rating.rate} />
           <div className="reviews">
             <span>({item.reviews})</span>
           </div>

           </div> */}

         </div>
        )
        })
        }
        </div>
       
      
    </div>
  )
}

export default Explore
