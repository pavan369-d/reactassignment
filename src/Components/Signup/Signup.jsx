import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import GooglePng from '/Images/Icon-Google.png';
import SideImage from '/Images/SideImage.png';
const Signup = ({account,setAccount}) => {
   
    // const [formValues,setFormValues]=useState({
    //     userName:'',
    //     emailorphoneNumber:'',
        
    //     password:'',
       
    // });
   
    const [formValues,setFormValues]=useState(
        {
            userName:'',
            email:'',
            password:'',
        }
    )
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const showMessage=useRef();
    const navigate = useNavigate();
    let validPop,blockPop;
    
   
    const handleChange=(e)=>{
     
        
        const {name,value}=e.target;`   `
        setFormValues({...formValues,[name]:value});
      
        
    }


    const handleSubmit=async(e)=>{
        e.preventDefault();
     
  
       const isValid = await validationSchema.isValid(formValues);
       
        
        if(isValid ){
           
           
           validPop= setTimeout(()=>{
                navigate('/signin');
            },4000)
            localStorage.setItem('userData',JSON.stringify(formValues))
        }
        
      
      
        setIsSubmit(true);
       
       
        setAccount(true);
        blockPop=setTimeout(()=>{
            showMessage.current.style.display="block";
            showMessage.current.style.transition="1s";
        },3000)
      

      console.log(formValues)
    }

    
  

    useEffect(()=>{
        // console.log(formErrors)
 if(Object.keys(formErrors).length===0 && isSubmit){
    console.log('update');
 }
 return ()=>clearTimeout(validPop,blockPop)
 
    },[formErrors,isSubmit,validPop,blockPop])


    const validationSchema =Yup.object({
        userName:Yup.string().required("Name is Required"),
        emailorphoneNumber:Yup.string().matches(/^[0-9]*$/,'PhoneNumber is not valid')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,'Email is not valid'),
        password:Yup.string().required('Password is required')
        .min(4,"Password must be at least 4 characters")
        .max(12,"Password must not exceed 12 characters")
        .matches(
            /[!@#$%&(),.?":{}|<>]/,
            "Password must contain at least one symbol"
        )
        .matches(/[0-9]/,"Password must contain at least one number")
        .matches(/[A-Z]/,"Password must contain at least one number")
        .matches(/[a-z]/,"Password must contain at least one lowercase letter"),
       
    });
   

  return (
     
    <div className='signup'>
        <div className="signup-container">
        <img src={SideImage} alt="sideimage" className='SideImage'/>
    { account ? (<div className='account-span' ref={showMessage}>Success!</div>):('')}
    <div className="form">
    <header>
   
 <h1>Create an account</h1>
    <p>Enter your details below</p>
    </header>
        <form onSubmit={handleSubmit}>
    <div className="input-fields">
        <div className="field name">
        <input type="text" 
        name='userName' 
        placeholder='Name'
        value={formValues.userName}
        onChange={handleChange}
     />
        </div>
    <div className="field">
        <input type="text" 
        name='email' 
        placeholder='Email or phoneNumber'
        value={formValues.email}
        onChange={handleChange}
        />
    </div>
    <div className="field">
        <input
         type="password" 
        name='password'
         placeholder='Password'
         value={formValues.password}
         onChange={handleChange}
      />
    </div>
    </div>
             <div className="submit-btns">
             <button className='create-btn'>Create Account</button>
             <button className="signup-btn"><img src={GooglePng} alt="google"/>Sign up with Google</button>
             <p>Already have account? <button className='login-btn'>Log in</button></p>
             </div>
  
   </form>
  
          
   </div>
   </div>
    </div>

  )
}

export default Signup
