import './Maps.css';
import {Link} from 'react-router-dom';
import {useJsApiLoader,GoogleMap,Marker,Autocomplete,DirectionsRenderer} from '@react-google-maps/api';
import { ChakraProvider,Box,Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { useRef} from 'react';
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}


// Install the react-google-maps/api/npm
//Set a latitude and longtitude to show the location...This current location is Paries...
const center={lat: 11.0812183,lng: 76.94155799999999} 
//const mid={lat :11.350208, lan: 76.796104}
//const google=google

function Maps(){

    const [loading , setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
    
        setTimeout(()=>{
        setLoading(false);
        },5000);
    },[]);

    
    //useJsApiLoader is a one function to help to load goole map api...
    const {isLoaded} =useJsApiLoader({

        //googleMapsApiKey is method of access the google map api key
              googleMapsApiKey : "AIzaSyA4L1mCOEh3qATL2XB8fkMftGembT6t88g",
              libraries: ["places"],
              
    })

    const [map,setmap] = useState(/**@type google.maps.Map */(null));
    const [directions,setdirections] = useState(null);
    const [distance,setdistance] = useState("");
    const [duration,setduration] = useState("");

    const orginref =useRef();
    const destinationref = useRef();

    //Once the google map can take the time to loaded then chakra ui skeletontext is show...
    if(!isLoaded){

        //Chakra provider can contain chakra tags...
        //Box is have all chakra ui methods...
        //SkeletonText, Skeloton is a loaded box...
     return <ChakraProvider>
            <Box >
             <SkeletonText height='30px'/>
             <br/>
              <Skeleton height='20px'/>
              <br/>
              <Skeleton height='30px'/>
              <br/>
              <Skeleton height='40px'/>
            </Box>
     </ChakraProvider>
     
    }

   async function RapidApi(){
        if(orginref.current.value === ''|| destinationref.current.value === ''){
            return
        }

        const DirectionService = new window.google.maps.DirectionsService();
        const result = await DirectionService.route({
            origin : orginref.current.value,
            destination : destinationref.current.value,
            travelMode : window.google.maps.TravelMode.DRIVING,

        })

        setdirections(result);
        setdistance(result.routes[0].legs[0].distance.text);
        setduration(result.routes[0].legs[0].duration.text);
    }

    function Cleared(){
        setdirections(null);
        setdistance("");
        setduration("");
        orginref.current.value='';
        destinationref.current.value='';
    } 

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
        {/* This is the main dialog box to control our maps */}
        <div className='box'>
            <div id='box1' className='d-flex'>
               <Autocomplete>
                <input className='form-control' placeholder='Orien' id='dacuple' ref={orginref}/>
                </Autocomplete>
                
                <Autocomplete>
                <input className='form-control' placeholder='Check' id='dacuple' ref={destinationref}/>
                </Autocomplete>
                <button className='btn btn-dark' onClick={RapidApi}>Calculate Rate</button>
                <button className='btn btn-danger' onClick={Cleared}>close</button>

            </div>

            {/* <div id='box2' className='d-flex'>
           <label>Directions</label>
           <label>Duration</label>
                <button className='btn btn-danger' onClick={()=> map.panTo(center)}>go</button>
               
            </div> */}
        </div>
       

      {/* This man tag have all google maps methods... */}
        <div className='man'>
{/* 
            Googlemap can have google api methods...
            This is hava center zoom controll and mainly mapContainerStyle...
            mapContainerStyle to help to show height and width in our display... */}
             <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%',height:'100%'}} onLoad={map=> setmap(map)}>

                     <Marker position={center}/>
                     <Marker position={center}/>
                     {directions && <DirectionsRenderer directions={directions}/>}
             </GoogleMap>
        </div>
        
        </>
}
</>
    )
}
 export default Maps;