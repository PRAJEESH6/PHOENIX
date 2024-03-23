import './Navbar.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Home from '../Home/Home';
import Cart from '../Cart_Items/Cart';
import { fridges } from '../Fridge/FridgeData';
import FridgeBridge from '../Fridge/FridgeBridge';
import Fridge from '../Fridge/Fridge';
import phoenix from '../imgs/o.png';
import phoenix1 from '../imgs/shopping_cart_PNG38.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  fg from './bot.jpg'

function Navbaar() {

  const [show, setshow] = useState(false);
  // const [navbar,setnavbar] = useState('');
  //console.log(navbar);


 const [api1, setApi1] = useState("");
  const [targett, settarget] = useState("");
  const fly = "hii prajeesh";
  const bulk = [];

  // {<Fridge fridges={fridges.filter((note)=>{note.name.toLowerCase().includes(navbar)})}  />}

  //const fridges={fridges.filter((note)=>note.name.toLowerCase().includes(navbar))} 

  function APIWORD(e)
  {
    setApi1(e.target.value);   
  }
  function APISEARCH()
  {
   // console.log("WELCOME PRAJEESH" , api1);
    <Link to='/search_components' />
  }

  return (
    <>


      <Navbar expand="lg" className='navbar' id='navs'>

        <Container>
          <Navbar.Brand href='#' id='img1'>PHOENIX
          {/* <div class="waviy">
   <span style={--i:1}>P</span>
   <span style={--i:2}>H</span>
   <span style={--i:3}>O</span>
   <span style={--i:4"}>E</span>
   <span style={"--i:5"}>N</span>
   <span style={"--i:6"}>I</span>
   <span style={"--i:7"}>X</span>
   
  </div> */}
          </Navbar.Brand>
          {/*                
    <video  height='200px' width='200px' autoPlay loop muted className='back'  id='hooo'>
      <source src='../imgs/PHOENIX.mp4'  type='video/mp4'/>
    </video> */}


          {/*******************************************************************************/}

          {/* <select className='dropdown-menu' >
          <option className='dropdown-item' value='good'>Good</option>
          <option value='bad'>Bad</option>
          </select> */}

          {/*******************************************************************************/}
          <div className='d-flex'>
            <input className='form-control w-50 mx-5' id='bar' placeholder='Search Your Products' type='text' onChange={APIWORD}  />
            {/* <Link to={`/search_component/${api1}`}  id='i' onClick={APISEARCH} >Search</Link> */}

            {/* <button className='btn btn-outline-info' type='submit' id='ok' onClick={(e)=>{
                e.preventDefault();
                  <Home targett={targett}/>
                //<Home fly={fly}/>
             }} >Search</button> */}
          </div>

          {/* <div className='dropdown' id='kgf'>
            <button className='btn btn-danger dropdown-toggle' type='button' id='goods' data-toggle='dropdown'aria-haspopup="true" aria-expanded="false">Launguage</button>
              <div className='dropdown-menu' aria-labelledby='goods'>
                  <a href='#' className='dropdown-item'>Eng</a>
                  <a href='#' className='dropdown-item'>Tamil</a>
              </div>
          </div> */}


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link> <Link to='/Maps' type='button'><img src={phoenix} id='map' /></Link> </Nav.Link>


              {/* This button can show the selected cart items..
                I used usestate method to hide and show the cart item contents
                Once clicked the button automatically the usestate intial value can be changed true so now its display.. */
              }
              <Nav.Link>   <Link to={'/chatbot'} type='button'> <img src='https://cdn3d.iconscout.com/3d/premium/thumb/chat-bot-5379962-4497578.png' id='zz' /> </Link> </Nav.Link>

              <Nav.Link> 
              <div className='anime'>
            <div className='border' ></div>
            <Link to='/Signin' id='sign'>Sign in</Link>
          </div>
          </Nav.Link> 


              {/* This button can show the selected cart items..
                I used usestate method to hide and show the cart item contents
                Once clicked the button automatically the usestate intial value can be changed false so now its hide.. */
              }
              {/* <div className='locate d-flex p-1'>
             <button className='btn btn-dark' onClick={()=>setshow(false)}  >Close</button>
          </div> */}


              <div id='ji' className='d-flex'>
               
                  <Nav.Link >
                    <Link to='/' className='nav-link' id='q'>Home</Link>
                  </Nav.Link>
                  <Nav.Link className='nav-item'>
                    <Link to='/Iphones' className='nav-link' id='w'>Gadgets</Link>
                  </Nav.Link>
                  <Nav.Link className='nav-item'>
                    <Link to='/Foods' className='nav-link' id='e'>Foods</Link>
                  </Nav.Link>
                  <Nav.Link className='nav-item'>
                    <Link to='/Sticky' className='nav-link' id='r'>Notes</Link>
                  </Nav.Link>
               
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* This is the logic code.. 
      once the show variable is true then its show Cart component contents otherwise hide...        */}

      {show ? <Cart /> : null}



    </>
  )
}
export default Navbaar;