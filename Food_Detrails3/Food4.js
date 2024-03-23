import { Link } from 'react-router-dom';
import './Food4';
import { useState } from 'react';
import axios from 'axios';

function Food3(){

    const [title3, settitle3] = useState(null);
    const [ingredients3, setingredients3] = useState(null);
    const [servings3, setservings3] = useState(null);
    const [instructions3, setinstructions3] = useState(null);

    
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
        settitle3(response.data[3].title);
        setingredients3(response.data[3].ingredients);
        setservings3(response.data[3].servings);
        setinstructions3(response.data[3].instructions);
        
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
            <div className='card-title'> TITLE :{title3}</div>
            <div className='list-item'> INGREDIENTS :{ingredients3}</div>
            <div className='list-item'>SERVINGS :{servings3}</div>
            <div className='list-item'>INSTRUCTIONS :{instructions3}</div>

            <button className='btn btn-success'>ORDER IT</button>
        </div>
        </div>
        </div>
        </>
    )
}
export default Food3;