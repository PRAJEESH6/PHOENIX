import './Apple.css'
import { Link } from 'react-router-dom';

function Apple(){
    return(
        <>
        <h1>Apple phones</h1>
        <Link to='/iphones' className="btn btn-info" >Back too All Category</Link>
        </>
    )
}
export default Apple;