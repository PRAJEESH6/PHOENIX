

// const Airbridge=({name,description,image,price,id})=>{
//     return(
//   <>
        
//     <div className='col-4 my-5 p-5' >
//                    <div className='cards '> 
//                    <div className='root1'>
//                     <h1 className='fridge'>{name}</h1>
//                     <p className='para'>{description}</p>
//                      <button className='btn btn-dark'>Place Order</button>
//                    </div>
//                     <div className='cover'>
//                         <div className='coverfront'>
//                             <div className='root'>
//                            <img src={image} className='card-img-top' id='pio'/>
//                             <h5 className='auto'>{name} <span className='rup'>$Rs. {price}/-</span></h5>
//                             <button className='btn btn-dark ' id='ttt'>More Info</button>
//                             </div>
//                         </div>
//                         <div className='coverback'></div>
//                     </div>
//                     </div>
//                    </div>


            
//           </>
//     )
// }
// export default Airbridge;

import Airpods from "./Airpods";
import { airpods } from "./AirpodsData";

function Airbridge(){

    return(
        <>
        {
        airpods.map((item,index)=>{

            return(
                <Airpods
                
                image = {item.image}
                title = {item.name}
                price = {item.price}
                description = {item.description}
                id = {item.id}
                item = {item}
                key = {index}
                />
            )
        })

         }
        </>
    )
}
export default Airbridge;