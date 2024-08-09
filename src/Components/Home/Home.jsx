import axios from 'axios'
import { useEffect, useState } from 'react'
import Bestseller from './Bestseller/Bestseller'
import Explore from './ExploreProducts/Explore'
import ImageBanner from '../ImageBanner/ImageBanner'
import Loader from '../Loader/Loader.jsx'
import ViewButton from '../ViewButton/ViewButton.jsx'
import Category from './Category/Category.jsx'
import './home.css'
import NewArrival from './NewArrival/NewArrival'
import Products from './Products/Products.jsx'
import GreaterPng from '/Images/greaterpng.png'
import Hero from '/Images/homehero.png'

const uRL=`https://fakestoreapi.com/products/`;

const Home = ({
  productData,
  setProductData,error,
  setError,login,setLogin,
  loading,setLoading,getUserLogin,
  newEndTime
  
}) => {
  const [timeCount,setTimeCount]=useState(0);

  const getData=async(url)=>{
    setLogin(getUserLogin);
  
    try{
      const res= await axios.get(url);
    const data= await res.data;
    setProductData(data);
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    const timout=setTimeout(()=>{
      setLoading(false);
    },4000)
    getData(uRL);
    },[]);

    if(loading)  return <Loader/>
    if(error) return <div>Error: {error}</div>
  return (
    <div className="home">
       
    
       <div className="heroSection">
       <aside>
       <div className="sideNav">
        <ul>
          <li>Woman{'\''}s Fashion <img src={GreaterPng} alt="" /></li>
          <li>Men{'\''} Fashion <img src={GreaterPng} alt="" /></li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby{'\''} & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        </div>
       </aside>
       <div className="heroImage">
       <div className="horizontal-line-herosection"></div>
        <img src={Hero} alt="" />
       </div>
       </div>

       <div className="viewProducts">
        <Products 
        productData={productData}
        setTimeCount={setTimeCount}
        newEndTime={'Aug 23, 2024 00:00:00'}
       />
       </div>
         <div className="productsViewButton">
      <ViewButton innerText="View All Products"/>
      </div>
        <div className="category-vertical-line"></div>

      <div className="productCategory">
        <Category/>
      </div>
      <div className="category-vertical-line"></div>

      <div className="productsBestSeller">
         <Bestseller
          carouselText={'This Month'}
          mainText={'Best Selling Products'}
         viewAll={false}
         slider={false}
         />
         
      </div>

      <div className="banner-wallpaper">
        <ImageBanner  
          timeCount={timeCount}
            
          newEndTime={'Aug 15, 2024 00:00:00'}
          />
      </div>

      <div className='explore-products'>
        <Explore
        uRL={uRL}/>
      </div>
      <div className="productsViewButton">
      <ViewButton innerText="View All Products"/>
      </div>

      <div className="newarrival-products">
        <NewArrival/>
      </div>

     

    </div>
  )
}

export default Home
