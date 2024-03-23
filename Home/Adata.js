import {BsFillCartCheckFill} from 'react-icons/bs';
 
const Adata=({id,img, name, description, price})=>{
   return(

       <div className='col-4'>
       <div className='card p-3 mx-3 my-3'>
           <img className='card-img-top' src={img} id="sup" img/>

           <div className='card-title'>NAME : {name}</div>
           <div className='card-title'>SPECIAL : {description}</div>
           <div className='card-title'>PRICE :$ {price}</div>
    
          <BsFillCartCheckFill className='btn btn-dark'/>
           <button className='btn btn-dark' onClick={()=>{
              console.log({name})
           }}>Add to Cart</button>
       </div>
   </div>
   
   )
}
export default Adata;