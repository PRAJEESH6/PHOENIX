import './Cart.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Itemcard from './Itemcard';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai';



function Cart(){
   
   
    const location=useLocation();
    const val=(location.state);

    return(
        <>

        {/* This is the cart method tag ..This method can contains all cart property....  */}
    

      while(this.val == true) {
        
         <div className='cart' key={val.val.id}>
                <div className='cart-title' id='cc'>Cart Items</div>
                    <div className='cart-content'>
                     
                  
                    <div className='cart-box'>
                        <div className='d-flex'>
                            <img src={val.val.image} alt='pic' id='no'/>
                               
                                <div className='cart-food-title' id='wp'>{val.val.name}</div>
                               
                                <div className='price-box'>
                                <div className='cart-price'>Rs {val.val.price}/-</div>
                                
                                <div className='cart-amt'>Total Amt : {val.val.price}/-</div>
                               
                                </div>

                                <input type='number' value='1' className='form-control' id='cart-quantity' onChange={(e)=>{
                                     if(isNaN(this.value) || (this.value < 1)){
                                        this.value = 1;
                                    }
                                }}/>
                            </div>

                            <BsFillTrashFill name='trash' className='cart-remove' onClick={''}/>
                            </div>
                        </div>
        
        
            
        
                     

                 
                    
</div>   
      }
    
        
       {/* <div className='cart' key={val.val.id} >
                <div className='cart-title'>Cart Items</div>
                    <div className='cart-content'>
                     
                  
                    <div className='cart-box'>
                            <img src={val.val.image} alt='pic' id='no'/>
                               
                                <div className='cart-food-title'>{val.val.title}</div>
                               
                                <div className='price-box'>
                                <div className='cart-price'>Rs {val.val.price}/-</div>
                                <div className='cart-amt'>Rs {val.val.price}/-</div>
                                </div>

                                <input type='number' value='1' className='form-control' id='cart-quantity' onChange={(e)=>{
                                     if(isNaN(this.value) || (this.value < 1)){
                                        this.value = 1;
                                    }
                                }}/>
                            </div>

                            <BsFillTrashFill name='trash' className='cart-remove' onClick={''}/>
                            
                        </div>
        
        
        
        
                     

                 
                    
</div>    */}
                      
                        
        
        </>
    )
}

export default Cart;