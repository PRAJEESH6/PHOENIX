import './Home1.css';
import biryani from '../imgs/Biryani.png';
import { Link } from 'react-router-dom';

function Home1(){
    return(
        <>
        <div className='Container' id='body'>
            <div className='row'>
                <div className='col-6'>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='mer1'>
                   <path fill="#72DE33" d="M64.7,-37.4C75.6,-18.4,70.6,9.7,57.1,29.2C43.7,48.7,21.9,59.5,2.4,58.1C-17.1,56.7,-34.2,43.1,-48.3,23.3C-62.5,3.4,-73.8,-22.9,-65.2,-40.5C-56.7,-58.2,-28.4,-67.3,-0.7,-66.8C26.9,-66.4,53.7,-56.5,64.7,-37.4Z" transform="translate(100 100)"  >
                
                   </path>
                </svg>
                <img src={biryani} alt='pic' id='birs' />
                </div>

                <div className='col-6'>
               
                <h4 id='mainq'>Phoenix Shopper's Delight </h4>
              <span id='main1q'>Elevate Your Adventure!</span><br></br>
              <h5 id='detq'>Indulge in the art of savoring life; every bite is a brushstroke of flavor on the canvas of your soul. Shop for your favorite foods and create a masterpiece of joy on your plate.</h5>
             
              <div className='animesq'>
            <div className='borders' ></div>
            <Link to='/Iphones'  id='fooss'>Shop Now</Link>
          </div>
                </div>
            </div>

       
        </div>
        </>
    )
}
export default Home1;