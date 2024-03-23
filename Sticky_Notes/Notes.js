import './Notes.css';
import { MdDeleteForever } from 'react-icons/md';

//This is the Third parent Component in this Sticky notes function...
//id , text, date is props to get each data's and to print our textarea boxes...

const Notes = ({ id, text, date, handledeleteNote }) => {
    return (
        <>
            {/* We can give the appropriate variable to our respective tags... */}

            <div className="note">
                <span id='blue'>{text}</span>
                <div className="footer">
                    <small id='dd'>{date}</small>

                    {/* MdDeleteForever is a react delete icons...  */}

                    <MdDeleteForever onClick={()=>handledeleteNote(id)} className='delete' size='1.3rem' />
                </div>
            </div>

        </>
    )
}
export default Notes;