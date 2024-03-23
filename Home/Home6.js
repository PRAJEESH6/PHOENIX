import './Home1.css';
import biryani from '../imgs/grocery.png';
import { Link } from 'react-router-dom';

function Home6(){
    return(
        <>
        <div className='Container' id='body'>
            <div className='row'>
                <div className='col-6'>
                
                <h4 id='main116'>Phoenix Shopper's Delight </h4>
              <span id='main1126'>Elevate Your Adventure!</span><br></br>
              <h5 id='det116'>Groceries, the sustenance of daily life, represent more than just items on a shopping list, they embody the essence of nourishment and the rhythm of domesticity.</h5>
             
              <div className='animes116'>
            <div className='borders' ></div>
            <Link to='/Iphones'  id='fooss'>Shop Now</Link>
          </div>
          </div>
                <div className='col-6'>

                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='mer16'>
                   <path fill="#72DE33" d="M64.7,-37.4C75.6,-18.4,70.6,9.7,57.1,29.2C43.7,48.7,21.9,59.5,2.4,58.1C-17.1,56.7,-34.2,43.1,-48.3,23.3C-62.5,3.4,-73.8,-22.9,-65.2,-40.5C-56.7,-58.2,-28.4,-67.3,-0.7,-66.8C26.9,-66.4,53.7,-56.5,64.7,-37.4Z" transform="translate(100 100)"  >
                
                   </path>
                </svg>
                <img src={biryani} alt='pic' id='img6'/>
                </div>
               
                
                </div>
            </div>

       
        
        </>
    )
}
export default Home6;