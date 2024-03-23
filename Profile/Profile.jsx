import { useState ,useRef} from 'react';
import './Profile.css';
import axios from 'axios';


const Profile = () =>{

    const inputRef = useRef(null);
    
   const [Aiimg , setAiImg] = useState("");
   const [img2 , setImg2] = useState("");
    const [img,setImg] = useState("");

    const Clicked = () =>{
        inputRef.current.click();
    }

    const ghost = (e)=>{
     
        const file = e.target.files[0];
        console.log(file);
        setImg(e.target.files[0]);
    }
   // console.log("THIS I S",img.name);

  const apple = (e)=>{
    const banana = e.target.value;
   setAiImg(banana);
  }
  console.log(Aiimg);

    //********************************************************************************************************* */

//     //THIS IS AI CARTOON GENERATOR POST METHOD... 
//     let reader = new FileReader();
//     const data = new FormData();
// data.append('image', '');
// data.append('index', '7');

// //'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
// //'6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
// const options = {
//   method: 'POST',
//   url: 'https://ai-cartoon-generator.p.rapidapi.com/image/effects/generate_cartoonized_image',
//   headers: {
//     'X-RapidAPI-Key': 'eac13ca5b5mshb84dccd4573d458p159f8ajsn551a694c2740', 
//     'X-RapidAPI-Host': 'ai-cartoon-generator.p.rapidapi.com'
//   },
//   data: data
// };


// 	 axios.request(options).then(response=>{
//         console.log(response.data);

//      }).catch((err)=>{console.error(err);})



//'6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
const options = {
  method: 'GET',
  url: 'https://face-animer.p.rapidapi.com/webFaceDriven/submitTaskByUrl',
  params: {
    imageUrl: '',
    templateId: '1'
  },
  headers: {
   // 'X-RapidAPI-Key': 'eac13ca5b5mshb84dccd4573d458p159f8ajsn551a694c2740',
    'X-RapidAPI-Host': 'face-animer.p.rapidapi.com'
  }
};


 axios.request(options).then(response=>{
    console.log(response.data);
 }).catch((err)=>{console.log(err)});
	

 //**********************************PART-2 */

const options1 = {
  
  method: 'GET',
  url: 'https://face-animer.p.rapidapi.com/webFaceDriven/getTaskInfo',
  params: {
    taskId: '524437385720069',
  },
  headers: {
    //'X-RapidAPI-Key': 'eac13ca5b5mshb84dccd4573d458p159f8ajsn551a694c2740',
    'X-RapidAPI-Host': 'face-animer.p.rapidapi.com'
  }
};

 axios.request(options1).then(response=>{

    console.log('hii',response.data);
 }).catch((err)=>{console.log(err)});


    //**************************************************************************************************** */

    const fruits = ()=>{
     
    const options5 = {
      method: 'POST',
      url: 'https://animimagine-ai.p.rapidapi.com/generateImage',
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '6a27dd6f06mshc7a66021cb5e47ap144fefjsn146a4ae86948',
        'X-RapidAPI-Host': 'animimagine-ai.p.rapidapi.com'
      },
      data: {
        selected_model_id: 'anything-v5',
        selected_model_bsize: '512',
        prompt: Aiimg
      }
    };
    
    axios.request(options5).then((response)=>{
      setImg2(response.data.imageUrl);
    }).catch((error)=> {
      console.error(error);
    });

  }
   
    return(
        <>
        
        {/* <h1 className='text-success mx-5 mt-3'>WELCOME PRAJEESH</h1> */}
        <div className='bird'>
            <div className='round'>
                <div onClick={Clicked}>
                    {img ?  <img src={URL.createObjectURL(img)} alt='pic' id='foo'/> :  <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt='pic' id='foo'/>}
          
            </div>
            <input type='file'  ref={inputRef} className='form-control' placeholder='CHOOSE YOUR PROFILE PIC' onChange={ghost} id='file'/>
            </div>

            <input type='text'  onChange={apple} className='form-control' id='hoone' placeholder='ENTER WHAT YOU WANT - AI WILL BE GENERATED FOR YOU'/>
            <button className='btn btn-dark' onClick={fruits} id='hobut'>Ai Generate</button>
                 <div className='video'>
                 {img2 ? <img src={img2} alt='pic' id='sup'/> : <img src='https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png' alt='pic' id='sup'/>} 
                     </div>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id='hhh'><path fill="#72de33" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        </>
    )
}
export default Profile;