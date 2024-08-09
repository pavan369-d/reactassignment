import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './Components/About/About'
import Account from './Components/Account/Account'
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import Header from './Components/Header/Header'
import Navbar from './Components/Header/Navbar/Navbar'
import Search from './Components/Header/Search/Search'
import Home from './Components/Home/Home'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import Productdetailspage from './Components/Productdetailspage/Productdetailspage'
import Signin from './Components/Signin/Signin'
import Signout from './Components/Signout/Signout'
import Signup from './Components/Signup/Signup'
import WishList from './Components/WishList/WishList'

const App = () => {

  const [account,setAccount]=useState(false);
  const [login,setLogin]=useState(false);  
  const [productData,setProductData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [countTimeLeft,setcountTimeLeft]=useState();
  
  
  // const [currentCount,setCurrentCount]=useState(new Date().getTime());
  // const endTime=new Date('Aug 23, 2024 00:00:00').getTime();
  // const gap=endTime-currentCount;
  // const seconds=1000;
  // const minutes= seconds*60;
  // const hours= minutes*60;
  // const days= hours*24;
  // const remainingDays= Math.floor((gap/days));
  // const remainingHours= Math.floor((gap%days)/hours);
  // const remainingMinutes=Math.floor((gap%hours)/minutes);
  // const remainingSeconds = Math.floor((gap%minutes)/seconds);
 

 const getUserLogin=JSON.parse(localStorage.getItem('login'));
 
 useEffect(()=>{
   
  
  setLogin(getUserLogin)


  
  },[login,getUserLogin,countTimeLeft])




 
 
  return (
   
   <div className='main-container'>
    
    <Header/> 
      <Navbar
      login={login}
    setLogin={setLogin}
    getUserLogin={login} />
      <Routes>
        <Route path='/' element={<Home
        productData={productData}
        setProductData={setProductData}
        error={error}
        setError={setError}
        login={login}
        setLogin={setLogin}
        loading={loading}
        setLoading={setLoading}
       
      
       
       />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup
         account={account}
         setAccount={setAccount} 
        />}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/productdetailpage' element={<Productdetailspage/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
       <Route path='/signout' element={<Signout
      />}/>
        <Route path='/signin' element={<Signin 
        login={login}
       />}/>
       <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    
         
  
    <Footer/>
   </div>
 
  )
} 

export default App
