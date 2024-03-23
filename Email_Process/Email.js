import styled from 'styled-components';
import './Email.css';
import emailjs from '@emailjs/browser';
import Popup from './Popup';
import { Link } from 'react-router-dom';
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}


function Email() {

  const [loading , setLoading] = useState(false);
useEffect(()=>{
    setLoading(true);

    setTimeout(()=>{
    setLoading(false);
    },5000);
},[])

    const BoxContainer =styled.div`
    
    width :500px;
    height:500px;
    display:flex;
    flex-direction: column;
    margin-left:450px;
    margin-top:50px;
    border-radius:19px;
    background-color:white;
    position:relative;
    overflow:hidden;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
    
    `;


    const TopContainer = styled.div`
    
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    padding:0 1.8em;
    padding-bottom:5em;
    `;

    const BackDrop = styled.div`
    width:900px;
    height:900px;
    margin-top:-500px;
   
    display:flex;
    flex-direction:column;
    border-radius: 50%;
    background-color:#72DE33;

    `;

  const HeaderContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  
  `;

  const HeaderText = styled.h2`
    
   margin-top:500px;
   font-size:30px;
    color:black;
    z-index: 20;
  `;

  const SmallText = styled.h6`
    color:black
    z-index: 20;
    font-size:11px;
    margin-top:-10px;
  `;


const backdropVariants ={
    expanded:{
        width:"100%",
        height:"100%",
        borderRadius:"20%",
        transform:"rotate(60deg)",
    },
    collapsed:{
        width:"160%",
        height:"550px",
        borderRadius:"50%",
        transform:"rotate(60deg)",
    }
}

const expandingTransition={
    type:"spring",
    duration:2.3,
    stiffness:30,
};







    /**
     * sendMail is a submit function its used to send emails our users...
     * @param e is denoted by prevent pages...
     * @constructor senform is a default email packege function
     * Service id(user email), template id (i created email template) public key is whole process account key...
     */
    const SendMail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_8zubm99','template_pkuik6h',e.target,'ahMlrWVdcCxeABR_D');
        alert('Thank you for your LOG IN');

    }
    
    const [isExpanded,setExpended]=useState(false);
    const [show,setshow] = useState(false);

    const playExpandingAnimation=()=>{
        console.log("hii");
        setExpended(true);
        setTimeout(()=>{
            setExpended(false);
        },expandingTransition.duration * 1000-1500);
    }

    return(

      <>
      {
         loading ?
         <DotLoader
         color={'#72DE33'}
         loading={loading}
         cssOverride={override}
         size={100}
         aria-label="Loading Spinner"
         data-testid="loader"
         
       />
       :
    <>

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='pone'>
  <path fill="#72DE33" d="M56.5,-19.6C64.8,7,57.2,37.6,38.3,50.9C19.4,64.2,-10.7,60.2,-30.9,44.9C-51.2,29.6,-61.6,3.1,-54.8,-21.5C-48,-46.2,-24,-69,0.1,-69C24.1,-69.1,48.3,-46.3,56.5,-19.6Z" transform="translate(100 100)" />
</svg>

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='ptwo'>
  <path fill="#72DE33" d="M56.5,-19.6C64.8,7,57.2,37.6,38.3,50.9C19.4,64.2,-10.7,60.2,-30.9,44.9C-51.2,29.6,-61.6,3.1,-54.8,-21.5C-48,-46.2,-24,-69,0.1,-69C24.1,-69.1,48.3,-46.3,56.5,-19.6Z" transform="translate(100 100)" />
</svg>
<div className='anime10'>
            <div className='border10' ></div>
    <BoxContainer id='kkol' >
     <TopContainer>
        <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants}>
         <HeaderContainer>
         <HeaderText id='decuple'>PHONIX</HeaderText>
            <HeaderText id='nop'>Welcome Back</HeaderText>
            <SmallText id='small'>Please Sign in to Continue</SmallText>
            <form onSubmit={SendMail} >
            <label id='wone'>Enter Your FullName</label>
            <input className='form-control' type='text' id='one' name='e-name' required='required' autoComplete='off' placeholder='ENTER YOUR FULL NAME'/>

            <label id='wone'>Enter Your Phone Number </label>
            <input className='form-control' type='number' id='two' name='e-no'  required='required'  autoComplete='off' placeholder='ENTER YOUR PHONE NUMBER'/>

            <label id='wone'>Enter Your Mail</label>
            <input className='form-control' type='email' id='three' name='emails-from'  required='required'  autoComplete='off' placeholder='ENTER YOUR MAIL ID'/>

        
            <Link to='/' type='submit' className='btn btn-dark mt-3 mx-5' id='sub' onClick={()=>{alert("Thank YOU")}}  >Submit </Link>
           
         
        </form>
         </HeaderContainer>


        </BackDrop>
     </TopContainer>
    </BoxContainer>
    </div>
        {/* <form onSubmit={SendMail}>
            <label>Enter Your FullName</label>
            <input type='text' id='one' name='e-name' placeholder='ENTER YOUR FULL NAME'/>

            <label>Enter Your Phone Number </label>
            <input type='number' id='two' name='e-no' placeholder='ENTER YOUR PHONE NUMBER'/>

            <label>Enter Your Mail</label>
            <input type='email' id='three' name='emails-from' placeholder='ENTER YOUR MAIL ID'/>

        
            <button type='submit'>Submit</button>
           
        </form> */}


<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='pthree'>
  <path fill="#72DE33" d="M56.5,-19.6C64.8,7,57.2,37.6,38.3,50.9C19.4,64.2,-10.7,60.2,-30.9,44.9C-51.2,29.6,-61.6,3.1,-54.8,-21.5C-48,-46.2,-24,-69,0.1,-69C24.1,-69.1,48.3,-46.3,56.5,-19.6Z" transform="translate(100 100)" />
</svg>

       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='pfive'>
  <path fill="#72DE33" d="M56.5,-19.6C64.8,7,57.2,37.6,38.3,50.9C19.4,64.2,-10.7,60.2,-30.9,44.9C-51.2,29.6,-61.6,3.1,-54.8,-21.5C-48,-46.2,-24,-69,0.1,-69C24.1,-69.1,48.3,-46.3,56.5,-19.6Z" transform="translate(100 100)" />
</svg>

        </>
}
</>
)
}
export default Email;
