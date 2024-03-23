
const Chicken=({image,name,description,quantity,price})=>{

    return(
      
        
        <div className='col-3'>
                    <div className='card'>
                        <img className='card-img-top' src={image}/>
                        <div className='card-body'>
                        <div className='card-title'>NAME : {name} </div>
                        <div className='card-title'>PRICE : {price}</div>
                        <div className='card-title'>QUANTITY : {quantity}</div>
                        <div className='card-title'>DESCRIPTION : {description}</div>
                        </div>
                    </div>
                </div>
        
      
    )

}
export default Chicken;