import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbaar from "./Navbars/Navbaar";
import {Route,Routes} from "react-router-dom";
import Iphones from "./Iphones/Iphones";
import Home from "./Home/Home";
import Foods from './Foods/Foods';
import Food_Details from './Food_Details/Food_Details';
import Food1 from './Food_Details1/Food1';
import Food2 from './Food_Details2/Food2';
import Food3 from './Food_Detrails3/Food4';
import axios from 'axios';
import { useState } from "react";
import Books from './Books/Books';
import Mobile from './Furniture/Mobile';
import Apple from './Apple_Phone/Apple';
import Kfc from './KFC/Kfc';
import Sticky from './Sticky_Notes/Sticky';
import Maps from './Maps/Maps';
import Fridge from './Fridge/Fridge';
import Airpods from './Airpods/Airpods';
import Smart from './SmartTv/Smart';
import Pendrive from './Pendrive/Pendrive';
import Toys from './Toys/Toys';
import Mobilees from './Mobiless/Mobilees';
import Camera from './Camera/Camera';
import Saree from './Saree/Saree';
import Grocery from './Grocery/Grocery';
import Email from './Email_Process/Email';
import Watch from './Watches/Watch';
import Cart from './Cart_Items/Cart';
import { CartProvider } from 'react-use-cart';
import Detail from './Details/Detail';
import Ai from './AI_IMAGE_GEN/Ai';
import Cartoon from './AI-Cartoon Generator/Cartoon';
import Profile from './Profile/Profile';
import Chat from './ChatBot/Chat';
import Search from './Search/Search';



function App() {

  
//   const [item, setitem] = useState([]);

//  // const prajeesh=[];
//   const options = {
//     method: 'GET',
//     url: 'https://the-vegan-recipes-db.p.rapidapi.com/',
//     headers: {
//       'X-RapidAPI-Key': 'cfcc9815d0mshaed41f8a7b377a6p188758jsn56008a558f96',
//       'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
//     }
//   };


// axios.request(options).then(response=>{
//   const item=(response.data);
//   //const item=response.json();
//   setitem(item);

// }).catch ((error)=> {
// console.error(error);
// })   
            
// *******************************************************************


const [kfc, setkfc] =useState([]);

const optionsh = {
  method: 'GET',
  url: 'https://kfc-chickens.p.rapidapi.com/chickens',
  headers: {
    'X-RapidAPI-Key': '6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
    'X-RapidAPI-Host': 'kfc-chickens.p.rapidapi.com'
  }
};

 axios.request(optionsh).then(response=>{
	const kfc=(response.data);
    setkfc(kfc);
}). catch ((error)=> {
	console.error(error);
})


  return (
    <>
    <CartProvider>
        <Navbaar/>
       {/* <Cartoon/> */}
      
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/Iphones' Component={Iphones} />
            <Route exact path='/Foods' Component={Foods}/>
            <Route exact path='/Food_Details' Component={Food_Details}/>
            <Route exact path='/Food1' Component={Food1}/>
            <Route exact path='/Food2' Component={Food2}/>
            <Route exact path='/Food3' Component={Food3}/>
            <Route exact path='/Books' Component={Books}/>
            <Route exact path='/Shoes' Component={Mobile}/>
            <Route exact path='/Apple' Component={Apple}/>
            <Route exact path='/Kfc' Component={Kfc}/>
            <Route exact path='/Sticky' Component={Sticky}/>
            <Route exact path='/Maps' Component={Maps}/>
            <Route exact path ='/Fridge' Component={Fridge}/>
            <Route exact path ='/Airpods' Component={Airpods}/>
            <Route exact path ='/SmartTv' Component={Smart}/>  
            <Route exact path ='/Pendrive' Component={Pendrive}/>
            <Route exact path ='/Toys' Component={Toys}/> 
            <Route exact path ='/Mobilees' Component={Mobilees}/> 
            <Route exact path ='/Camera' Component={Camera}/>
            <Route exact path ='/Saree' Component={Saree}/> 
            <Route exact path ='/Grocery' Component={Grocery}/> 
            <Route exact path ='/Signin' Component={Email}/> 
            <Route exact path ='/Watches' Component={Watch}/>  
            <Route exact path ='/Cart' Component={Cart}/>
            <Route exact path ='/Product_Details' Component={Detail}/>   
            <Route exact path='/img' Component={Ai}/>     
            <Route exact path='/profile' Component={Profile}/>   
            <Route exact path='/chatbot' Component={Chat}/>
            <Route exact path='/search_component/:api1' Component={Search}/>
        </Routes>
        {/* <Ai/> */}
        </CartProvider>
    </>
  );
}

export default App;
