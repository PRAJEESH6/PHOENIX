import { Link } from 'react-router-dom';
import './Food1.css';
import { useState } from 'react';
import axios from 'axios';

function Food1(){

    const [title1, settitle1] = useState(null);
    const [ingredients1, setingredients1] = useState(null);
    const [servings1, setservings1] = useState(null);
    const [instructions1, setinstructions1] = useState(null);

    
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
        settitle1(response.data[1].title);
        setingredients1(response.data[1].ingredients);
        setservings1(response.data[1].servings);
        setinstructions1(response.data[1].instructions);
        
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
            <div className='card-title'> TITLE :{title1}</div>
            <div className='list-item'> INGREDIENTS :{ingredients1}</div>
            <div className='list-item'>SERVINGS :{servings1}</div>
            <div className='list-item'>INSTRUCTIONS :{instructions1}</div>

            <button className='btn btn-success'>ORDER IT</button>
        </div>
        </div>
        </div>
        </>
    )
}
export default Food1;