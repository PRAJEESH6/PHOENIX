import './NewNote.css';
import { useState } from 'react';

//This is the Fourth parent component...
//Finally handleNewNote data is come to our component...

const NewNote = ({ handleNewNote }) => {

    //This useState is used to store and update users given data's...
    const [save, setSave] = useState('');

    const Character_Limit = 200;

    //Captain variable is used for to store uers typping values...
    const Captain = (e) => {
        if(Character_Limit - e.target.value.length >= 0){
        setSave(e.target.value);
        }
    }

    //This is the button function once user will clicked this button the data will be stored automatically...
    const CaptainClick = () => {
        if(save.trim().length > 0){
        handleNewNote(save);
        setSave('');
        }
    }


    return (

       
        <>
            {/* This is the new STICKY notes box */}

            <div className="newNote">
                <textarea className='loop'

                    rows='8'
                    cols='10'
                    placeholder="Write your Snippets..."

                    // Value is give the useState variable to update each and every minute...
                    value={save}
                    //Give the CAPTAIN function when will be called is user can start typing the function will be called...
                    onChange={Captain}

                ></textarea>
                <div className="newFooter">
                    <span>{Character_Limit-save.length} Remaining</span>
                    {/* CaptainClick is a function once user click the button the data aill be stored... */}
                    <button className="btn btn-dark" onClick={CaptainClick}>Save</button>
                </div>
            </div>

        </>

    )
}
export default NewNote;