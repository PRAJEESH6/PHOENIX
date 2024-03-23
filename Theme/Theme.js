import './Theme.css';

const Theme=({handleDark})=>{
    return(
        <>
        
        <button onClick={()=>handleDark((previous) => !previous)} className='btn btn-dark'>Theme</button>
        
        
        </>
    )
}
export default Theme;