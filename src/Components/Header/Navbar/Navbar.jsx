
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { productSearch } from '../../../redux/productAction'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import carticon from '/Images/Cart1.png'
import cancel from '/Images/iconcancel.png'
import logoutIcon from '/Images/iconlogout.png'
import reviews from '/Images/Iconreviews.png'
import userIcon from '/Images/iconuser.png'
import myOrder from '/Images/myorder.png'
import searchicon from '/Images/search.png'
import userWhite from '/Images/usericonwhite.png'
import wishlist from '/Images/Wishlist.png'

const Navbar = ({login,getUserLogin}) => {
  
  const [userClicked,setUserClicked]=useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch()
  let cartItemCount=useSelector((data)=>data.cartData)
  // console.log(cartItemCount);
  const handleLogout=()=>{
  
   
    setTimeout(()=>{
       localStorage.setItem('login',false)
      
      navigate('/signin')
    },1000)
    

    console.log(login,'login');
  }



  const handleAccount=()=>{
     setUserClicked(!userClicked);
    
  }
  return (
    <nav className='nav-bar'>
     <div className="nav">
        <div className="nav-left">
          <p className='exclusive-feature'>Exclusive</p>
           <div className="left-links">
           <NavLink to='/'>Home</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            {login? ' ':<NavLink to='/signin'>Sign In</NavLink>}
           </div>
        </div>
           <div className="nav-right">
            <input type="text"
            
             placeholder='what are you looking for?' 
             onChange={(event)=>dispatch(productSearch(event.target.value))}/>
            {login&&getUserLogin ? 
            (
              <ul className="right-links">
                 <div className="cart-items-count">
                   <span>{cartItemCount.length}</span>
                 </div>
                <li className="right-i">
             
              <img src={searchicon}
              className='searchicon'/>
                </li>
                <li className="right-i">
              <img src={wishlist} alt=""
              className='right-icon' />
             
                </li>
                <li className="right-i">
              <Link to="/cart">
              <img src={carticon} alt=""
              className='right-icon' />
              </Link>
             
                </li>
                <li className="right-i">

              <img src={userClicked ? userWhite : userIcon  } onClick={handleAccount} className={userClicked ? 'account-link  ' : 'account-link-notactive'} />
                </li>
              <ul className={userClicked ? "account-dropdown":'acount-dontdrop'}>
               <div className="inner-link">
               <li className="dropdown-list">
               <div className='whiteuser'>
                <Link to="/account">
               <img src={userClicked&&login ? userWhite : userIcon  } className='right-icon white40' id='userWhite' />
                  </Link>
               </div>
                  <p>Manage My Account</p>
                </li>
                <li className="dropdown-list">
                  <img src={myOrder} alt="" />
                  <p>My Order</p>
                </li>
                <li className="dropdown-list">
                  <img src={cancel} alt="" />
                  <p>My Cancellations</p>
                </li>
                <li className="dropdown-list">
                  <img src={reviews} alt="" />
                  <p>My Reviews</p>
                </li>
                <li className="dropdown-list">
                  <img src={logoutIcon} alt=""  onClick={handleLogout}/>
              <NavLink to="/signout" onClick={handleLogout} className='dropdown-list'>

              
              </NavLink>
              <p onClick={handleLogout}>Logout</p>
                 
                </li>
               </div>
              </ul>
              </ul>

            ):(
              <div className="right-links">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            )}
           </div>
     </div>
     <div className="verctical-line"></div>
    </nav>
  )
}

export default Navbar
