import './Fridge.css';
import { Link } from 'react-router-dom';
import { fridges } from './FridgeData';
import {FaStar} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart_Items/Cart';
import ReactImageMagnify from 'react-image-magnify';
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}

const Fridge=()=>{

    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
    
        setTimeout(()=>{
        setLoading(false);
        },5000);
    },[]);

    const navigate = useNavigate();
   // const navigate1 = useNavigate();

  const [navbar,setnavbar] = useState('');
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
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
               
   <div className='main'>

{/* <video src={vudeo} autoPlay loop muted/> */}


            <h1 className='text-center my-4' id='bn'>WORLD CLASS FRIDGES</h1>
           {/* <Navbar handleSearchNote2={setDoom}/> */}

           <input type='text'className='form-control' placeholder='Search Your Products' id='lp' onChange={(e)=>{setnavbar(e.target.value)}}/>
          
    
        <div className='container'>
         <div className='row'>
         {
            fridges
            .filter((val)=>{
                if(navbar == ""){
                    return val;
                }else if(val.name.toLowerCase().includes(navbar.toLowerCase())){
                    return val;
                }
            })
            .map((val)=>{
                return(
                    <>
                       
    <div className='col-4 my-5 ' >
                   <div className='card bg-light' key={val.id}> 
                   <div className='root1'>
                    <h1 className='card-title'id='autos'>{val.name}</h1>
                    <p className='para'>{val.description}</p>

                                               

  {/* Rating Purposes codes */}

  <div className='d-flex' id='gap'>

{/* 1. First we can declared array and use spread value and give the value 5 */}
{[...Array(5)].map((star, index) =>{

    // We can give currentraring variable because we can give description it stores index+1 value
    // Because index value must be started 0... 
    const Current_Rating = index + 1;
     return(
        // 1. We can give the label tag , this label tag constaints all rating stars
     
        <label>

            {/* 1.  The label tag containts radio input tag and it have onclick function
                     because which star user can be click that star index  will be stored rating
                     useState.... 
                2.   We can give name because the useState identeficatioin purposes...
                3.   And we can give the value is current Ratimng becaue update each and avery time...*/}
            <input

             type='radio' 
             name='rating' 
             value={Current_Rating} 
             onClick={()=>
                setRating(Current_Rating)
            }>

            </input>

            {/* We can give the Fastar icon 
            And we can give the color the Current_Rating is <= hover useState variable value or rating useState variable value The color will be show yellow otherwise shows gray... */}
            <FaStar className='star' size={35} color={Current_Rating <= (hover || rating) ? "#ffc107" :"#e4e5e5"}

            //ON Mouse Enter event is used to isdentify mouse pointer will be entered in which stars...
            //Incase the mouse pointer will be entered in 3rd stars then automatecally sethover function will be stored current rating...
            onMouseEnter={()=>setHover(Current_Rating)}

            //The mouse pointer will be leave in the particular stars then automatically sethover functioin will be worked on  null...
            onMouseLeave={()=>setHover(null)}/>
        </label>
     )
})}

</div>
<p id='pp'>Give Your Rating {rating} outof 5</p>

          



                    <Link to='/Cart' className='btn  mx-3' id='add' onClick={()=>{
                       // <Cart id={val.id}/>
                      navigate('/Cart',{state :{id :val.id}});
                       navigate('/Cart', {state : {name : val.name}})
                      // navigate1('/Cart', {state : {name : val.name}})
                        navigate('/Cart', {state : {image : val.image}})
                        navigate('/Cart', {state : {price : val.price}})
                       //  console.log("gum",val.id)
                        // console.log(val.name)
                        // console.log(val.image)
                        // console.log(val.price)s
                    }}>Add to Cart</Link>
                     
                     </div>
                      <div className='cover'>
                          <div className='coverfront'>
                              <div className='root p-3 mt-3'>
                              {/* <ReactImageMagnify className='card-img-top'{...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:'https://blog.bestbuy.ca/wp-content/uploads/2021/01/LG-Side-By-Side-InstaView-Refrigerator.jpg'  ,
    },
    largeImage: {
        src: 'https://blog.bestbuy.ca/wp-content/uploads/2021/01/LG-Side-By-Side-InstaView-Refrigerator.jpg',
        width: 1200,
        height: 1800
    }
}} /> */}
                             <img  className='card-img-top ' src={val.image}  id='pio'/>
                              <div className='card-title text-dark' id='auto'>{val.name}</div>
                              <span className='card-title' id='rup'><span id='yo'>$ Rs - </span> {val.price}/-</span>
                              {/* <button className='btn btn-dark ' id='ttt'>More Info</button> */}
                              
                              </div>
                             
                          </div>
                          <div className='coverback'></div>
                      </div>
                      </div>
                     </div>
  
                    </>
                )
            })
           }
         
        
            {/* {fridges.map((fridge) =>{
                return(
                    <FridgeBridge key={fridge.id} {...fridge} fridge={fridge}  />
                    
                    
                )
             })} */}
             </div>
             </div>
          
             <Link to='/iphones' className="btn btn-info mx-5" >Back too All category</Link>
          
             </div>
        </>
}
</>
    )
}
export default Fridge;