import React from 'react'

const Header = () => {
  return (
    <header className='top-header'>
     <div className="header-content">
     <div className='header-text'> 
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <button className='shopnow-btn'>ShopNow</button>
      </div>
      <select name="language">
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
     </div>
   
    </header>
  )
}

export default Header
