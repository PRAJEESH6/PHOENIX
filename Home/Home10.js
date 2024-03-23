import './Home1.css';
import biryanii from '../imgs/shoe.png';
import { Link } from 'react-router-dom';

function Home10(){
    return(
        <>
       <div className='Container' id='body'>
            <div className='row'>
                <div className='col-6'>
                
                <h4 id='main10'>Phoenix Shopper's Delight </h4>
              <span id='main110'>Elevate Your Adventure!</span><br></br>
              <h5 id='det10'>Many shoes are engineered to provide comfort and support for the feet, especially those designed for activities like running, walking, or standing for long periods.</h5>
             
              <div className='animes10'>
            <div className='borders' ></div>
            <Link to='/Iphones'  id='fooss'>Shop Now</Link>
          </div>
          </div>
                <div className='col-6'>

                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='mer10'>
                   <path fill="#72DE33" d="M64.7,-37.4C75.6,-18.4,70.6,9.7,57.1,29.2C43.7,48.7,21.9,59.5,2.4,58.1C-17.1,56.7,-34.2,43.1,-48.3,23.3C-62.5,3.4,-73.8,-22.9,-65.2,-40.5C-56.7,-58.2,-28.4,-67.3,-0.7,-66.8C26.9,-66.4,53.7,-56.5,64.7,-37.4Z" transform="translate(100 100)"  >
                
                   </path>
                </svg>
                <img src={biryanii} id='h10' alt='pic' />
                </div>
               
                
                </div>
            </div>
        </>
    )
}
export default Home10;