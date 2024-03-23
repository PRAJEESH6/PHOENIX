import Tour from './Tour'
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}

//import Col from './Col/Col';

 const Col =({item})=>{
    
    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
    
        setTimeout(()=>{
        setLoading(false);
        },5000);
    },[]);

                  
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
                    <div className='container-fluid  '>
                    <div className='row'>
   
               
               { item.map((food)=>{
                  return <Tour key={food.id} {...food}/>
                })}
               

 
                             </div>
                             </div>
            
       

        </>
 }
 </>
    )
    
}
export default Col;