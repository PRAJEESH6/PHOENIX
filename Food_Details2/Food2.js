import { Link } from 'react-router-dom';
import './Food2';
import { useState } from 'react';
import axios from 'axios';

function Food2(){

    const [title2, settitle2] = useState(null);
    const [ingredients2, setingredients2] = useState(null);
    const [servings2, setservings2] = useState(null);
    const [instructions2, setinstructions2] = useState(null);

    
    const options = {
        method: 'GET',
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
        params: {
          query: 'italian wedding soup'
        },
        headers: {
          'X-RapidAPI-Key': 'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
          'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
      };
      axios.request(options).then(response=>{;
        settitle2(response.data[2].title);
        setingredients2(response.data[2].ingredients);
        setservings2(response.data[2].servings);
        setinstructions2(response.data[2].instructions);
        
     }). catch ((error)=> {
        console.error(error);
    })
    return(
        <>
        <Link to='/Foods' className='btn btn-primary'>Back</Link>
        <div className='container'>
        <div className='col-10'>
        <div className='card p-3 '>
            <img className='card-img-top' id='none' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jY0Kd6obo2FdBGKpwyhPLnGOYHNzDwHnqA&usqp=CAU'/>
            <div className='card-title'> TITLE :{title2}</div>
            <div className='list-item'> INGREDIENTS :{ingredients2}</div>
            <div className='list-item'>SERVINGS :{servings2}</div>
            <div className='list-item'>INSTRUCTIONS :{instructions2}</div>

            <Link  className='btn btn-success'>ORDER IT</Link>
        </div>
        </div>
        </div>
        </>
    )
}
export default Food2;