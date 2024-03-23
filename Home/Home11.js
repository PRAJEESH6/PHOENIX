import market from '../imgs/laad.png';
import {useCart} from 'react-use-cart';
import { Link } from 'react-router-dom';

function Home11(){
    return(
        <>
  <div className='d-flex'>
                <div className='row'>
                  
                  <div className='col-6'>
                  <h4 id='main101'>Phoenix Shopper's Delight </h4>
              <span id='main1102'>Elevate Your Adventure!</span><br></br>
              <h5 id='det101'>The sunny climate and outdoor-friendly atmosphere of Phoenix encourage an active lifestyle. Highlight how your e-commerce platform caters to the needs of individuals who value both leisure and convenience.</h5>
             
              <div className='animes101'>
            <div className='borders' ></div>
            <Link to='/Iphones'  id='fooss'>Shop Now</Link>
          </div>
                  </div>


                 <div className='col-6'>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='mer'>
                   <path fill="#72DE33" d="M64.7,-37.4C75.6,-18.4,70.6,9.7,57.1,29.2C43.7,48.7,21.9,59.5,2.4,58.1C-17.1,56.7,-34.2,43.1,-48.3,23.3C-62.5,3.4,-73.8,-22.9,-65.2,-40.5C-56.7,-58.2,-28.4,-67.3,-0.7,-66.8C26.9,-66.4,53.7,-56.5,64.7,-37.4Z" transform="translate(100 100)"  >
                    {/* <animate attributeName='d'
                    dur='1000s'
                    repeatCount='indefinate'
                    values="M64.7,-37.4C75.6,-18.4,70.6,9.7,57.1,29.2C43.7,48.7,21.9,59.5,2.4,58.1C-17.1,56.7,-34.2,43.1,-48.3,23.3C-62.5,3.4,-73.8,-22.9,-65.2,-40.5C-56.7,-58.2,-28.4,-67.3,-0.7,-66.8C26.9,-66.4,53.7,-56.5,64.7,-37.4Z ;
                    M57.9,-18C67.5,10.7,62.6,45,42.7,59.7C22.8,74.4,-12.1,69.5,-36.6,51.5C-61.1,33.4,-75.2,2.2,-67.4,-24.1C-59.6,-50.4,-29.8,-71.8,-2.8,-70.9C24.2,-70,48.3,-46.8,57.9,-18Z ;
                    M53.3,-16.4C60.5,4.7,51.8,32,34.5,43.7C17.2,55.3,-8.7,51.4,-31.5,36.4C-54.3,21.5,-74.2,-4.5,-68.4,-23.8C-62.7,-43,-31.3,-55.4,-4.1,-54.1C23.1,-52.8,46.2,-37.6,53.3,-16.4Z;
                    M51.7,-10.2C61,11.6,58.2,43.9,38.6,59.7C19.1,75.4,-17.3,74.6,-36.8,58.6C-56.2,42.6,-58.8,11.3,-49.9,-10.1C-41,-31.5,-20.5,-42.9,0.4,-43.1C21.2,-43.2,42.5,-32,51.7,-10.2Z;
                    M62,-26.6C67.8,-2.1,51.5,23.1,32.5,34.4C13.6,45.7,-8,43.1,-27.7,30.6C-47.5,18,-65.5,-4.6,-60.6,-27.8C-55.6,-51,-27.8,-74.8,0.1,-74.8C28.1,-74.9,56.1,-51.1,62,-26.6Z "
                    
                    ></animate> */}
                   </path>
                </svg>
                    <img src={market} alt='pic' id='malar' />
                  </div>
                </div>
              </div> 
             
              </>
    )
}

export default Home11;