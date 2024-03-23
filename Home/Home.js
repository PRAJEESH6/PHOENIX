import './Home.css';
import axios from "axios";
//import Col from '../Col/Col';
import Adata from './Adata';
import Navbar from '../Navbars/Navbaar';
import {useCart} from 'react-use-cart';
import { Link } from 'react-router-dom';
import {Col,Container,Row} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
import Home7 from './Home7';
import Home8 from './Home8';
import Home9 from './Home9';
import Home10 from './Home10';
import Home11 from './Home11';
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}



function Home(){

  const [loading , setLoading] = useState(false);
useEffect(()=>{
    setLoading(true);

    setTimeout(()=>{
    setLoading(false);
    },5000);
},[])

  const [item, setitem] = useState([]);

  const [pizza,setpizza]= useState([]);

  const optionsp = {
    // method: 'GET',
    // url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
    // headers: {
    //   'X-RapidAPI-Key': 'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
    //   'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
    // }
    };
    
 axios.request(optionsp).then(response=>{ 
   const lion=(response.data); 
   setpizza(lion);  
   
}). catch ((error) =>{
    console.error(error); 
})


 // const prajeesh=[];
  const options2 = {
    method: 'GET',
    url: 'https://the-vegan-recipes-db.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'cfcc9815d0mshaed41f8a7b377a6p188758jsn56008a558f96',
      'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
    }
  };


axios.request(options2).then(response=>{
  const item=(response.data);
  //const item=response.json();
  setitem(item);

}).catch ((error)=> {
console.error(error);
})   

  //******************************************************************************************** */

  //  const {title, difficulty, image} = this.props.item;
   

    /**
     * All api category data's are stored in useState();(Amazon-real time data);
     */
    const [itemss , setItems]=useState(null);
    const [itemss1 , setItems1]=useState(null);
    const [itemss2 , setItems2]=useState(null);
    const [itemss3 , setItems3]=useState(null);
    const [itemss4 , setItems4]=useState(null);
    const [itemss5 , setItems5]=useState(null);
    const [itemss6 , setItems6]=useState(null);
    const [itemss7 , setItems7]=useState(null);
    const [itemss8 , setItems8]=useState(null);
    const [itemss9 , setItems9]=useState(null);
    const [itemss10 , setItems10]=useState(null);
    const [itemss11 , setItems11]=useState(null);
    const [itemss12 , setItems12]=useState(null);
   
   


    /**
     * This array can stored all api data and divide data's through indexes...
     * @type {*[]}
     */
    const datas=[];

    /**
     * This is the Api All product Data Category lists ~(Amazon-real time data);
     * @type {{headers: {"X-RapidAPI-Host": string, "X-RapidAPI-Key": string}, method: string, params: {country: string}, url: string}}
     */
   
const options = {
    method: 'GET',
    // url: 'https://real-time-amazon-data.p.rapidapi.com/product-category-list',
    // params: {country: 'US'},
    headers: {
    //   'X-RapidAPI-Key': '6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
    //   'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

    axios.request(options).then((response)=>{
        /**
         * All api data's can stored datas array through push function...
         */
        datas.push(response.data);

        /**
         * Stored datas in our useState variables...
         */
        setItems(datas[0].data[0].name);
        setItems1(datas[0].data[1].name);
        setItems2(datas[0].data[2].name);
        setItems3(datas[0].data[3].name);
        setItems4(datas[0].data[4].name);
        setItems5(datas[0].data[5].name);
        setItems6(datas[0].data[6].name);
        setItems7(datas[0].data[7].name);
        setItems8(datas[0].data[8].name);
        setItems9(datas[0].data[9].name);
        setItems10(datas[0].data[10].name);
        setItems11(datas[0].data[11].name);
        setItems12(datas[0].data[12].name);
       
      
        



    }).catch ((error)=> {
        console.error(error)
    })
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
                          {/* <div className='row'>
            <div className='list-group col-3 g-1 mx-3 my-3'>
                
                <a href='#' className='list-group-item'>{itemss}</a>
                <a href='#' className='list-group-item'>{itemss1}</a>
                <a href='#' className='list-group-item'>{itemss2}</a>
                <a href='#' className='list-group-item'>{itemss3}</a>
                <a href='#' className='list-group-item'>{itemss4}</a>
                <a href='#' className='list-group-item'>{itemss5}</a>
                <a href='#' className='list-group-item'>{itemss6}</a>
                <a href='#' className='list-group-item'>{itemss7}</a>
                <a href='#' className='list-group-item'>{itemss8}</a>
                <a href='#' className='list-group-item'>{itemss9}</a>
                <a href='#' className='list-group-item'>{itemss10}</a>
                <a href='#' className='list-group-item'>{itemss11}</a>
                <a href='#' className='list-group-item'>{itemss12}</a>
            </div> 

        </div>*/}

      {/* //************************************************************************************ */ }
    
      <Container fluid id='oo'>
                <Row>
                    <Col >
                    
                  

     <Carousel>
    <Carousel.Item interval={1300}>
      <div><Home11/></div>
        <Carousel.Caption>  </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item > 
      <div><Home1/></div>
        <Carousel.Caption>
           </Carousel.Caption>
      </Carousel.Item> 
       <Carousel.Item >
     <div> <Home2/></div>
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
       <div><Home3/></div> 
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item>
   <div><Home4/></div>  
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
    <div><Home5/></div>
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
   <div><Home6/></div> 
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
    <div> <Home7/></div>
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
   <div><Home8/></div>  
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item> 

     <Carousel.Item>
      <div><Home9/></div>
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
      <div><Home10/></div>
        <Carousel.Caption> </Carousel.Caption>
      </Carousel.Item>

       

    </Carousel>
  




                    </Col>
                </Row>
            </Container >
        





       {/* //************************************************************************************ */ }
             
              
        <div>
       

        <div className='container-fluid'>
            <div className='row'>
            <h1 className='text-danger' id='pizza'>Pizza is not a trend, it's a way of life</h1>
           {pizza.map((water)=>{
                return <Adata key={water.id}  {...water} />
            })}
            </div> 
        </div>    
        </div>
           

           <Col item={item}/>
                     
             {/* <Col/> */}
            
            </>
}
</>
    )

            }
export default Home;