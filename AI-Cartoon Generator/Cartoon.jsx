import { useState } from 'react';
import './Cartoon.css';
import axios from 'axios';
import Detail from '../Details/Detail';

const Cartoon = () =>{
   
    const [ai_text , setAi_text] = useState([]);

    //'6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
    //'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
    const options = {
      method: 'GET',
      url: 'https://ai-writer1.p.rapidapi.com/text/',
      params: {
        text: 'Describe an america'
      },
      headers: {
        'Content-Type': 'application/json',
        //'X-RapidAPI-Key': '6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
        'X-RapidAPI-Host': 'ai-writer1.p.rapidapi.com'
      }
    };
    
   
         axios.request(options).then(response=>{
            console.log(response.data);
         }).catch ((error)=> {
        console.error(error);
    })

    return(
        <>
        <h1>AI Cartoon Generator</h1>

        <div className='container'>
            <div className='img'>
            <img stc='' alt='pic' id='hj'/>
          
            </div>
        </div>
        
        </>
    )
}
export default Cartoon;