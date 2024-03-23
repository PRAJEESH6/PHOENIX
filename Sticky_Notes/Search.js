import React from "react";
import {BsFillSearchHeartFill} from 'react-icons/bs';
import './Search.css';

const Search=({handleSearchNote})=>{
    return(
        <>
        
        <div className="container">
            <BsFillSearchHeartFill size='1.3em' className="see"/>
            <input id="pet" onChange={(e)=>handleSearchNote(e.target.value)} className="form-control" placeholder="Search your notes..."></input>
        </div>
        
        </>
    )
}
export default Search;