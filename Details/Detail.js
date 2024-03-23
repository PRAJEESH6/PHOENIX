import '../Details/Detail.css';
import {FaStar} from 'react-icons/fa';
import { useEffect, useRef, useState } from "react";
import ReactImage from "react-image-magnify"
import axios from 'axios';

function Detail(){

  
  const [ai_text , setAi_text] = useState("");
  const [tarvalue , setTar_Value] = useState();
  //console.log("hii",ai_text);
  function group(e){
    setTar_Value(e.target.value);
   // console.log(tarvalue);
  }
   
    let ImgId=1;
    const imgs = document.querySelectorAll('#singlep a');
   
     imgs.forEach((img)=>{
      img.addEventListener('click',(e)=>{
        e.preventDefault();
        ImgId=img.dataset.id;
        moveImage();
      })
     }); 

    function moveImage(){
        
        const display = document.querySelector('.zoom img:first-child').clientWidth;
        let width =(ImgId-1)*display;
       document.querySelector('.mainimg').style.transform=`translateX(${-width}px)`;
    }
    const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

//******************************************************************************************************************** */
                            //AI API- TEXT GENERATOR(REVIEW)
    
         function GenerateText(){
          
                          //6a27dd6f06mshc7a66021cb5e47ap144fefjsn146a4ae86948
                          //5cc9fb1501mshf05b20a0c5ea394p1512aejsnaa094eacacda
                            //'6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
                            //'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
                            //'cfcc9815d0mshaed41f8a7b377a6p188758jsn56008a558f96',
                            //'eac13ca5b5mshb84dccd4573d458p159f8ajsn551a694c2740',
                            const options = {
                              method: 'GET',
                              url: 'https://ai-writer1.p.rapidapi.com/text/',
                              params: {
                                text: tarvalue
                              },
                              headers: {
                                'Content-Type': 'application/json',
                                'X-RapidAPI-Key': '04743046aemsh23495839c96649cp1ea06fjsn6dea5a9baf26',
                                'X-RapidAPI-Host': 'ai-writer1.p.rapidapi.com'
                              }
                            };
                            
                    
                                 axios.request(options).then(response=>{
                                    setAi_text(response.data);
                                    console.log(response.data);
                              
                                 }).catch ((error)=> {
                                console.error(error);
                            })                          

 
           }
  
     
//********************************************************************************************************************* */
  
return(
        <>
        <div id='header'>
                        <div  id='head'>
                            <img src='https://media1.cgtrader.com/variants/VtFgEcn9vewAURtSh8yKv7WC/40073f86dea5cc27b3e46b911284f10ff35833da74046da55f55f229c8993de7/pendrive3.jpg' alt='pic' id='headpic'/>
                               </div>
         </div>

<div className='container-fluid'>
    <div className='row'>
        <div className='col-1'>
   
         <section id='boxes'>
            <div id='singlep'>
               <a href="#" data-id="1" > <img src='https://media1.cgtrader.com/variants/VtFgEcn9vewAURtSh8yKv7WC/40073f86dea5cc27b3e46b911284f10ff35833da74046da55f55f229c8993de7/pendrive3.jpg' alt='pic' id='sp'></img></a>
            </div>

            <div id='singlep'>
            <a href="#" data-id="2" ><img src='https://mockuptree.com/wp-content/uploads/edd/2020/06/free-Pendrive-Mockup.jpg' alt='pic' id='sp'></img></a>
            </div>

            <div id='singlep'>
            <a href="#" data-id="3" ><img src='https://th.bing.com/th/id/R.39d4d6ab20d18dd17e0192feb1f4ad75?rik=bM%2f8s5Z9PxQZeg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fPen-Drive-PNG-File.png&ehk=3RyyhhoSuZYk1Dr0LM2yLDNlciJWcwdnwH9VdtXdW7M%3d&risl=&pid=ImgRaw&r=0' alt='pic' id='sp'></img></a>
            </div>

            <div id='singlep'>
            <a href="#" data-id="4" ><img src='https://d2j6dbq0eux0bg.cloudfront.net/images/1107006/998556802.jpg' alt='pic' id='sp'></img></a>
            </div>

            <div id='singlep'>
            <a href="#" data-id="5" > <img src='https://images.easytechjunkie.com/pen-drive.jpg' alt='pic' id='sp'></img></a>
            </div>

            <div id='singlep'>
            <a href="#" data-id="6" ><img src='https://media.amicopc.com/wp-content/uploads/2020/05/18160716/pendrive30.jpg' alt='pic' id='sp'></img></a>
            </div>

            <div id='singlep'>
            <a href="#" data-id="7" > <img src='https://wallpapercave.com/wp/wp10254242.jpg' alt='pic' id='sp'></img></a>
            </div>
         </section>
         </div>


         <div className='col-4'>
            <div className='zoom'>
              <div className='mainimg'>                    
            <img src='https://media1.cgtrader.com/variants/VtFgEcn9vewAURtSh8yKv7WC/40073f86dea5cc27b3e46b911284f10ff35833da74046da55f55f229c8993de7/pendrive3.jpg' alt='pic' id='zoom1'/>
                <img src='https://mockuptree.com/wp-content/uploads/edd/2020/06/free-Pendrive-Mockup.jpg' alt='pic' id='zoom1'></img>
                            <img src='https://th.bing.com/th/id/R.39d4d6ab20d18dd17e0192feb1f4ad75?rik=bM%2f8s5Z9PxQZeg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fPen-Drive-PNG-File.png&ehk=3RyyhhoSuZYk1Dr0LM2yLDNlciJWcwdnwH9VdtXdW7M%3d&risl=&pid=ImgRaw&r=0' alt='pic' id='zoom1'></img>
                            <img src='https://d2j6dbq0eux0bg.cloudfront.net/images/1107006/998556802.jpg' alt='pic' id='zoom1'></img>
                            <img src='https://images.easytechjunkie.com/pen-drive.jpg' alt='pic' id='sp'></img>
                            <img src='https://media.amicopc.com/wp-content/uploads/2020/05/18160716/pendrive30.jpg' alt='pic' id='zoom1'></img>
                            <img src='https://wallpapercave.com/wp/wp10254242.jpg' alt='pic' id='zoom1'></img>
            </div>
            </div>

            <h1 className='tex'>About this item</h1>
            <p className='te'>64GB Capacity & USB 3.0 Speed- This USB flash comes with 64GB, enough capacity to save your daily photos, videos and any other documents. And USB 3.0 super speeds to save time when transferring, sharing or storing files, easily to share your work files between computers. (The display capacity of the USB stick is about 90% of the rated capacity, and to reach USB 3.0 high-speed, you need to connect to a computer or other device that supports USB 3.0, otherwise it won’t reach USB 3.0 speed.)</p>
              </div>

         <div className='col-4'>
            <div id='det'>
                    <h1 id='pra'>Pendrive Name</h1>
                   
                 {/* Rating Purposes codes */}
  
    <div className='d-flex' id='gap'>
  
  {/* 1. First we can declared array and use spread value and give the value 5 */}
  {[...Array(5)].map((star, index) =>{
  
      // We can give currentraring variable because we can give description it stores index+1 value
      // Because index value must be started 0... 
      const Current_Rating = index + 1;
       return(
          // 1. We can give the label tag , this label tag constaints all rating stars
       
          <label>
  
              {/* 1.  The label tag containts radio input tag and it have onclick function
                       because which star user can be click that star index  will be stored rating
                       useState.... 
                  2.   We can give name because the useState identeficatioin purposes...
                  3.   And we can give the value is current Ratimng becaue update each and avery time...*/}
              <input
  
               type='radio' 
               name='rating' 
               value={Current_Rating} 
               onClick={()=>
                  setRating(Current_Rating)
              }>
  
              </input>
  
              {/* We can give the Fastar icon 
              And we can give the color the Current_Rating is <= hover useState variable value or rating useState variable value The color will be show yellow otherwise shows gray... */}
              <FaStar className='star' size={35} color={Current_Rating <= (hover || rating) ? "#ffc107" :"#e4e5e5"}
  
              //ON Mouse Enter event is used to isdentify mouse pointer will be entered in which stars...
              //Incase the mouse pointer will be entered in 3rd stars then automatecally sethover function will be stored current rating...
              onMouseEnter={()=>setHover(Current_Rating)}
  
              //The mouse pointer will be leave in the particular stars then automatically sethover functioin will be worked on  null...
              onMouseLeave={()=>setHover(null)}/>
          </label>
       )
  })}
  
  </div>
  <p id='pp'>Give Your Rating {rating} outof 5</p>
  
            <ul></ul>

<div className='d-flex' id='tab'>
            <h1 className='text-danger'>79%</h1>
            <h1 className='text-danger'>7967</h1>
 </div>
 <h5 id='tab'>Inclusive of all taxes</h5>
 <h5 id='tab'>EMI starts at ₹91. No Cost EMI available EMI options </h5>
 <ul></ul>

 <section>
    <p id='j' className='tab'>
<span id='india' className='tab'>Colour : </span>Silver<br></br>
<span id='india' className='tab'>Brand : </span>Moreslan<br></br>
<span id='india' className='tab'>Memory Storage Capacity : </span>64 GB<br></br>
<span id='india' className='tab'>Hardware Interface : </span>USB 3.0<br></br>
<span id='india' className='tab'>Special Feature : </span>Waterproof<br></br>
<span id='india' className='tab'>Write Speed : </span>100</p>
 </section>

<section>
    <div className='ai'>
       
            <h3 id='aihead' class="animate-charcter"> Write Your review using AI</h3>
            <div className='d-flex'>
            <button className='btn btn-dark mb-3' onClick={GenerateText}>Generate AI</button>
            <input type='text' className='form-control' onChange={group} id='form' placeholder='AI - TYPE YOUR REVIEW HEADING'/>
            </div>
          
          <div id='text_box' placeholder='ENTER YOUR FABULOUS REVIEW..' > 
                     {ai_text}
          </div>
        </div>
 </section>
            </div>
         </div>

         <div className='col-2' id='los'>
           
      <ul className='list-group'>
        <li className='list-group-item list-group-item-action'>BOOK</li>
        <li className='list-group-item list-group-item-action'>WATCHES</li>
        <li className='list-group-item list-group-item-action'>SHOES</li>
        <li className='list-group-item list-group-item-action'>KFC</li>
        <li className='list-group-item list-group-item-action'>GROCERY</li>
        <li className='list-group-item list-group-item-action'>SAREE</li>
        <li className='list-group-item list-group-item-action'>CAMERA</li>
        <li className='list-group-item list-group-item-action'>MOBILES</li>
        <li className='list-group-item list-group-item-action'>TOYS</li>
        <li className='list-group-item list-group-item-action'>PENDRIVE</li>
        <li className='list-group-item list-group-item-action'>AIRPODS</li>
        <li className='list-group-item list-group-item-action'>SMART TV</li>
        <li className='list-group-item list-group-item-action'>FRIDGE</li>
    
      </ul>
            
         </div>
         </div>
</div>
             
        </>
    )
}
export default Detail;