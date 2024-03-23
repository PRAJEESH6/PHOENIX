import React, { useState } from 'react';
import './Sticky.css';
import { Link } from 'react-router-dom';
import Addnotes from './Addnotes';
import Notes from './Notes';
import Search from './Search';

//This is the first parent Component of Sticky notes Folder...

function Sticky() {

    //This is the All Sticky notes data's collection useState method...
    //This useState method have unique id ,text, date ...

    const [notes, setnotes] = useState([

        //setNotes can automatically updated this data's....
        {
            id: 1,
            text: "Today i shop latest airpods and 100 gb pendrive its review is good .so i bought this products... And I like airpods its very user friendly... The airpods price $200 it pritty cheap.. ",
            date: "30/07/23",
        },
        {
            id: 2,
            text: "I want one new silk saree. so I bought new silk saree . This cloth quality is very good ...",
            date: "31/07/23",
        },
        {
            id: 3,
            text: "Today I shop Two mobile phones . its very user friendly and work smoothly...",
            date: "01/08/23",
        },

    ]);

    const [searches,setSearches] = useState('');


    // Newone is a one variable to use the print and save the  newtext value in the sticky notes...
    //We are passing the data from NewNote Component to First parent component using props method....
    const newOne = (text) => {
        const date=new Date();
        const Sticky={
           id:'5',
           text:text,
           date:date.toLocaleDateString()

        };
        const Stickys =[...notes,Sticky];
        setnotes(Stickys);
    }

    const delete_note=(id)=>{
        const Stickys =notes.filter((note) =>note.id != id);
        setnotes(Stickys);
    }

    return (
        <>

            <h1 id='snip'>Write Your Snippets</h1>

            {/* This container have All Sticky notes.. */}

            <Search handleSearchNote={setSearches}/>
            <div className='container1'>

                {/* We passed the notes data (useState data's) to Addnotes Component.. using props method.... */}
                {/* handleNewNote is the function to transfer new sticky data's...(props) */}
                <Addnotes 
                notes={notes.filter((note)=>note.text.toLowerCase().includes(searches))} 
                handleNewNote={newOne} 
                handledeleteNote={delete_note} 
                id="no"/>
            </div>



 {/* This is the button to use come to home page */}
 <Link to='/' className='btn btn-primary'>Back to Home</Link>

        </>
    )
}
export default Sticky;