import React from 'react';
import './Sticky.css';
import Notes from './Notes';
import NewNote from './NewNote';

//This is the second parent component in this Sticky notes folder...
//notes is the props value it helps to transer the data's...
//handleNewNote function also helps to transfer the data's and save...

const Addnotes = ({ notes, handleNewNote, handledeleteNote }) => {
    return (
        <>


            <div className='container1'>

                {/* We use the map method to get each and every id values and store it... */}

                {
                    notes.map((note) => (<Notes id={note.id} text={note.text} date={note.date} handledeleteNote={handledeleteNote} />))
                }

                {/* We can pass the handleNewNote data's to NewNote Component using this method... */}
                
                <NewNote handleNewNote={handleNewNote} />


            </div>





        </>
    )
}
export default Addnotes;