
const Tour=({id,title,image})=>{

    return  (
    <div className='col-4 p-3' >
                      
    <div className='card p-3 h-200' id="door" >
         <img className='card-img-top border border-warning' src={image} alt='pic'></img>
         <div className='card-title'>{title}</div>
         <div className='card-title'></div>
     </div>
     </div> 
    )
};

export default Tour;