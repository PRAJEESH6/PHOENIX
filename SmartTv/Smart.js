import { smartTVs } from "./SmartData";
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa';
import { useState } from "react";

function Smart(){

    const [navbar,setnavbar] = useState('');
       
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
   


    return(
        <>
    <h1 className="text-center my-4" id='bn'>Smart Tv's</h1>
        <input type='text' className="form-control mx-5" onChange={(e)=>{setnavbar(e.target.value)}} placeholder="Search Your Smart Tv's.."/>
          
    
          <div className='container'>
           <div className='row'>
           {
              smartTVs
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
  
            
  
  
  
                      <button className='btn btn-dark' onClick={''}>Add to Cart</button>
                       
                       </div>
                        <div className='cover'>
                            <div className='coverfront'>
                                <div className='root p-3 mt-3'>
                               <img  className='card-img-top ' src={val.image}  id='pio'/>
                                <div className='card-title text-dark' id='auto'>{val.name}</div>
                                <span className='card-title' id='rup'>$Rs. {val.price}/-</span>
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
                      </div>
                       </div>
       </>
)
}
export default Smart;