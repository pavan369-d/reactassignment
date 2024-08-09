import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import downArrow from '/Images/downarrow.png';
import gamePad from '/Images/gamepad.png';
import gamingMonitor from "/Images/redjoystick.png";
import topArrow from '/Images/toparrow.png';
const Cart = () => {
 
  const [count,setCount]=useState(0);
  const breadcrumbItems=[
    {label:'Home' ,path:'/',active:false},
    {label:'Cart', path:'/cart',active:true}
  ]


  
  return (
    <div className="cart-products">
      <div className="breadcrumb-float-cart breadcrumb-float">

    <Breadcrumb
    items={breadcrumbItems}/>
      </div>
 
      <div className="product-container">
      <table>
            <thead>
            <tr>
                <th>
                 <span className='thead'>Product</span>
               
                </th>
                <th>
                  <span className='thead'>Price</span>
                
                </th>
                <th>
                  <span className='thead'>Quantity</span>
                
                </th>
                <th>
                  <span className='thead'>Subtotal</span>
                
                </th>
            </tr>
            </thead>
            <tbody>
             <tr>
              <td>
               <div className='product-cart-desc'>
               <img src={gamingMonitor }alt="gamingMonitor" className='product-table-img'/>
               <span>LCD Monitor</span>
               </div>
              </td>
              <td>
                <div className="product-cart-desc">
                <span>$650</span>
                </div>
              </td>
              <td>
                <div className="product-cart-desc">

              <div className="custom-input-number">
                <input type="number" min="01" max="10"  value={count} onChange={(e)=>setCount(e.target.value)}/>
                <div className="buttons-inc">
                <img src={topArrow} alt=""  className='toparrow-count' onClick={()=>setCount(count+1)}/>
                <img src={downArrow} alt="" className='downarrow-count' onClick={()=>setCount(count-1)}/>
                </div>
                </div>
                </div>
              </td>
              <td>
                <div className="product-cart-desc">

                <span>$650</span>
                </div>
              </td>
             </tr>
             <tr>
              <td>
                <div className='product-cart-desc'>
             

               <img src={gamePad} alt="gamepad" className='product-table-img'/>
               <span>H1 Gamepad</span>
                </div>
            
              </td>
              <td>
              <div className='product-cart-desc'>
                <span>$550</span>
                </div>
              </td>
              <td>
              <div className="product-cart-desc">
                <div className="custom-input-number">
                <input type="number" min="01" max="10" value={count} onChange={(e)=>setCount(e.target.value)}/>
                <div className="buttons-inc">
                <img src={topArrow} alt=""  className='toparrow-count'/>
                <img src={downArrow} alt="" className='downarrow-count'/>
                </div>
                </div>
                </div>
              </td>
              <td>
                <div className="product-cart-desc">
                <span>$1100</span>
                </div>
              </td>
             </tr>
            </tbody>
        </table>
            <div className='cart-actions'>
              <div className="return-to-shop">
              <Link to="/">Return To Shop</Link>
              </div>
              <div className="update-cart">
                <button>Update Cart</button>
                
              </div>
            </div>
        <div className="cart-total-summary">
          <div className="apply-coupon">
            <input type="text" placeholder='Coupon Code'/>
            <button className='coupon-btn'>Apply Coupon</button>
          </div>
          <div className="cart-total">
            <h3>Cart Total</h3>
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>$1750</span>
            </div>
            <div className="cart-vertical-line"></div>
            <div className="cart-shipping">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="cart-vertical-line"></div>
            <div className="cart-total-amount">
              <span>Total</span>
              <span>$1750</span>
            </div>
          </div>
        </div>
       </div>

    </div>
  )
}

export default Cart

