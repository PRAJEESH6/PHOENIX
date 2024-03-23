import {FaStar} from 'react-icons/fa';
import { useState } from 'react';
import './Chinese.css'

const Chinese=({title,image})=>{

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return(

        <div className='col-4' >
        <div className='card p-3 mx-3 my-3' id='ru'>
            <img className='card-img-top' src={image} id='qp'/>

            <div className='card-title'><span>Name</span> : {title}</div>


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
<p id='wo'>Give Your Rating {rating} outof 5</p>

          <button className="btn" id='ei'>More</button>

            
        </div>
    </div>
    )
 }
 export default Chinese;