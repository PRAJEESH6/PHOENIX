// import { useState } from "react";
// import axios from "axios";
// import Adata from "./Adata";

// function Ahome(){
//     const [pizza,setpizza]= useState([]);

//     const options = {
//         method: 'GET',
//         url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
//         headers: {
//           'X-RapidAPI-Key': '6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
//           'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
//         }
//       };
      
//    axios.request(options).then(response=>{ 
//      const lion=(response.data); 
//      setpizza(lion);  
     
//   }). catch ((error) =>{
//       console.error(error); 
//   })
//   console.log(pizza);
//     return(
//         <>
//          <div className='container-fluid'>
//             <div className='row'>
                
//            {pizza.map((water)=>{
//                 return <Adata key={water.id} {...water}/>
//             })}
//             </div> 
//         </div>    
        
        
//         </>
//     )
// }
// export default Ahome;