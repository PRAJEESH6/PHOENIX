import Chicken from './Chicken';
import './Kfc.css'
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}

function Kfc(){
    const [kfc, setkfc] =useState([]);

    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
    
        setTimeout(()=>{
        setLoading(false);
        },5000);
    },[]);

    //'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
const options = {
  method: 'GET',
  url: 'https://kfc-chickens.p.rapidapi.com/chickens',
  headers: {
    'X-RapidAPI-Key': '5cc9fb1501mshf05b20a0c5ea394p1512aejsnaa094eacacda',
    'X-RapidAPI-Host': 'kfc-chickens.p.rapidapi.com'
  }
};

 axios.request(options).then(response=>{
	const kfc=(response.data);
    setkfc(kfc)
}). catch ((error)=> {
	console.error(error);
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
         <h1 id='bn' className='text-center'>KFC</h1>
        <Link to='/iphones' className="btn btn-info"  >Back too All category</Link>

        <div className='container'>
            <div className='row'>
               {kfc.map((chick)=>{
                <Chicken key={chick.id} {...chick}/>
               })}
            </div>
        </div>
        </>
}
</>
    )
}
export default Kfc;