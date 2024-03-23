import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai';
import img from '../imgs/gold2.png';


function Itemcard(props){

   
    return(
        <>
          <div className='cart-box'>
                            <img src={img} alt='pic' id='no'/>

                            <div className='cart-detail' key={Math.floor(Math.random()*10000)}>
                               
                                <div className='cart-food-title'>{props.title}</div>
                               
                                <div className='price-box'>
                                <div className='cart-price'>Rs {props.price}/-</div>
                                <div className='cart-amt'>Rs {props.price}/-</div>
                                </div>

                                <input type='number' value='1' className='form-control' id='cart-quantity' onChange={(e)=>{
                                     if(isNaN(this.value) || (this.value < 1)){
                                        this.value = 1;
                                    }
                                }}/>
                            </div>

                            <BsFillTrashFill name='trash' className='cart-remove' onClick={''}/>
                            
                        </div>
        
        
        
        
        </>
    )
}
export default Itemcard;