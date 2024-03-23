import react, { useRef, useState } from 'react';
import './Ai.css';
import default_image from './Ai_imgs/ai2.jpg';

const Ai = () =>{

    const [image_url , setImage_url] = useState("/");
    let inputRef = useRef(null);
    const [loading,setLoading] = useState(false)

    const ImageGenerator =async() =>{
     
        if(inputRef.current.value===""){
            return 0;
        }
        setLoading(true);

        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:"Bearer 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",
                    "User-Agent" : "Chrome"
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value}`,
                    n:1,
                    size:"1024x1024",
                }),
            }
        );
        let data =await response.json();
        console.log(data);
        let data_array = data.data;
        setImage_url(data_array[0].url);
        setLoading(false);
    }

    return(
        <>
        <h1 id='head'> Ai Image Generater</h1>
        {/* <div class="waviy" id='head'>
   <span style="--i:1">A</span>
   <span style="--i:2">i</span>
   <span style="--i:3"></span>
   <span style="--i:4">I</span>
   <span style="--i:5">m</span>
   <span style="--i:6">a</span>
   <span style="--i:7">g</span>
   <span style="--i:8"> </span>
   <span style="--i:9">G</span>
   <span style="--i:10">e</span>
   <span style="--i:11">n</span>
   <span style="--i:12">e</span>
   <span style="--i:13">r</span>
   <span style="--i:14">a</span>
   <span style="--i:15">t</span>
   <span style="--i:16">e</span>
   <span style="--i:17">r</span>
  </div> */}
        <p>Feel free to Ask..</p>
        <div className='ai'>
            <img src={image_url==="/"?default_image:image_url} id='aiimg' alt='Default-Image'/>
        </div>
        <div className='loading'>
            <div className={loading?"loding-bar-fill":"loding-bar"}></div>
            <div className={loading?"loding-text":"display-none"}>Loading..</div>
        </div>

        <div className='search d-flex'>
            <input type='text' ref={inputRef} placeholder='WRITE YOUR CREATIVITY..' name='serach' className='form-control' id='con' />
            <button className='btn btn-dark' id='gn' onClick={()=>{ImageGenerator()}}>Generate Ai</button>
        </div>
        </>
    )
}
export default Ai;