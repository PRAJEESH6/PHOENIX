import './Furniture.css';
 
const Furniture=({name,price,image,description})=>{


   return(

       <div className='col-4'>
       <div className='card p-3 mx-3 my-3' id='poo'>
           <img className='card-img-top' src={image} id="sup" />

           <div className='card-title'>NAME : <span id='na'>{name}</span> </div>
           <div className='card-title'>PRICE :<span id='pr'>₹ {price}</span> </div>
           <div className='card-title'>DESCRIPTION : <span id='des'>{description}</span></div>

           
       </div>
   </div>
   )
}
export default Furniture;