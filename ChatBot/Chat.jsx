import './Chat.css';
import axios from 'axios';
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}

    
const Chat = ()=>{

    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
    
        setTimeout(()=>{
        setLoading(false);
        },5000);
    },[]);

    const [message , setMessage] = useState("");
    const [message2, setMessage2] = useState("");

    let dummy;

    const ChatClicking = ()=>{

       setMessage(dummy);
    }

    const chatBotx = (e)=>{
       dummy = e.target.value;

}
//console.log(message);
//console.log(message2);





const options = {
  method: 'POST',
  url: 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '6a27dd6f06mshc7a66021cb5e47ap144fefjsn146a4ae86948',
    'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
  },
  data: {query: message}
};

axios.request(options).then((response)=>{
    setMessage2(response.data.response);
  //  console.log(response.data);
}).catch((error)=>{
    console.error(error);
}); 

    return(
        <>
         {
         loading ?
         <DotLoader
         color={'#72DE33'}
         loading={loading}
         cssOverride={override}
         size={100}
         aria-label="Loading Spinner"
         data-testid="loader"
         
       />
       :
        <>
        <div id='chat_whole'>
        <div id='chat_box'>
            <div id='chat_header'>PHOENIX CHATBOT</div>


       <div id='chat_body'>
<div id='user' className='d-flex'>{message}</div>
<div id='bot'>{message2}</div>


</div>
  


          

          
        </div>
        <input type='text' id='chat_input' className='form-control' onChange={chatBotx} placeholder='PHOENIX CAN ASSIST YOU..!!'/>
            <button className='btn btn-info' id='chat_but' onClick={ChatClicking}>Message</button>
        </div>
        
    
        </>
        }
        </>
    )
}
export default Chat;