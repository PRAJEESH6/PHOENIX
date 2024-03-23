import './Books.css';
import { Link } from 'react-router-dom';
import Author from './Author';
import axios from "axios";
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';
import video  from '../Videos/bvideo.mp4';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}


function Books(){

    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
    
        setTimeout(()=>{
        setLoading(false);
        },5000);
    },[]);

    const [author1, setauthor] =useState([]);
   
    const options1 = {
        method: 'GET',
        url: 'https://hapi-books.p.rapidapi.com/top_authors',
        headers: {
          'X-RapidAPI-Key': '6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
       }
      };
    
    axios.request(options1).then(response=>{
    const author1=(response.data);
     setauthor(author1);
   // console.log(author);
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
        <div className='python'>
        <video autoPlay loop muted src={video} className='python3'></video>
        <Link to='/iphones' className="btn btn-info" >Back too All Category</Link>
        </div>

        <div className='container-fluid'>
            <div className='row'>
           {author1.map((data)=>{
                return <Author key={data.id} {...data}/>
            })}
            </div>
        </div>
        </>
}
</>
    )
}
export default Books;