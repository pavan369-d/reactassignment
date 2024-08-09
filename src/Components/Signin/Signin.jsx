import { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SideImage from '/Images/SideImage.png';
const Signin = ({login}) => {
    
    let loginData ={
        email:'',
        password:'',
    }
   
    const showLogin=useRef()
    const navigate = useNavigate();
    let newPop;
 
    
    const handleLogin=(e)=>{
        const data = JSON.parse(localStorage.getItem('userData'));

        e.preventDefault();
        loginData.email=e.target[0].value;
        loginData.password=e.target[1].value;
         
        if(loginData.password===data.password){
            localStorage.setItem('login',true);
           
           
            
            newPop= setTimeout(()=>{
                navigate('/');
                showLogin.current.style.display="block";
            },2000)
        }
        console.log(login)
    
    }

    useEffect(()=>{
        return ()=>clearTimeout(newPop)
    },[newPop])

  return (
    <div className='signup'>


    <div className="signup-container">
    <img src={SideImage} alt="sideimage" className='SideImage'/>

    <div className='form'>
         {login? ( <div className='account-span' ref={showLogin}><p>Login Successful!</p></div>):('')}
         <header>
      <h1>Log in to Exclusive</h1> 
      <p>Enter your details below</p>
      </header>
       <form onSubmit={handleLogin}>
   <div className="field">
        <input type="text" 
        name='email' 
        placeholder='Email or PhoneNumber'
        />
       
    </div>
    <div className="field">
        <input
         type="password" 
        name='password'
         placeholder='Password'
        />
        
    </div>
   <div className="submit-btns login-btns">
            <button className='create-btn login-user'>Log in</button>
            <NavLink className="forgotpass" >Forgot Password?</NavLink>
            </div>
   </form>
    </div>
    </div>
    </div>
  )
}

export default Signin
