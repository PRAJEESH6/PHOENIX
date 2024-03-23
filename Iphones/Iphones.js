import './Iphones.css';
import {Link} from 'react-router-dom';
import {Col,Container,Row} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import DotLoader from 'react-spinners/DotLoader';
import { useEffect, useState } from 'react';

const override: CSSProperties ={
  display: "block",
  margin: "0 auto",
  marginTop:"250px",
}


function Iphones(){

const [loading , setLoading] = useState(false);
useEffect(()=>{
    setLoading(true);

    setTimeout(()=>{
    setLoading(false);
    },5000);
},[])

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
         <div className='container-fluid' id='java'>

            <Container fluid id='ooo'>
                <Row>
                    <Col >
                    
                  

    <Carousel>
      <Carousel.Item interval={1000}>
       <img src={require('../imgs/ooo.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>Classic Laptop</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={require('../imgs/oo1.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>FAV Mobile</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('../imgs/oo2.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>Mega Pendrive</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('../imgs/oo3.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>American Pendrive</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('../imgs/air.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>American Camera</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={require('../imgs/book.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>Gain Knowledge</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={require('../imgs/chi.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>American Chicken</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={require('../imgs/saree.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>American Pendrive</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={require('../imgs/tv.jpg')} alt='pic' id='lll'/>
        <Carousel.Caption>
          <h3>American Pendrive</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      

    </Carousel>
  




                    </Col>
                </Row>
            </Container >
       

          </div>
        

        <div className='containers-fluid' id='love'>
            <nav className='nav'>
                <div className='navbar navbar-expand-lg bg-dark'>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className='navbar-nav ms-auto'>

                        <li  className='nav-item'>
                            <Link to='/Books' className='nav-link' >Books</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Watches' className='nav-link' >Watches</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Shoes' className='nav-link' >Shoes</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Kfc' className='nav-link' >KFC</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Grocery' className='nav-link' >Grocerry</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Saree' className='nav-link' >Saree</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Camera' className='nav-link' >Camera</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Mobilees' className='nav-link' >Mobiles</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Toys' className='nav-link' >Toys</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Pendrive' className='nav-link' >Pendrive</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Airpods' className='nav-link' >Airpods</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/SmartTv' className='nav-link' >Smart Tv</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Fridge' className='nav-link' >Fridge</Link>
                        </li>

                        
                    </ul>
                </div>

                </div>
            </nav>
        </div>
        </>
    } 
    </>
    )

}
export default Iphones;