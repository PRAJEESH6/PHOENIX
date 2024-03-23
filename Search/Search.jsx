import { useParams } from 'react-router-dom';
import './Search.css';
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useState } from 'react';

const Search = ()=>{

    const  {api1} = useParams();

    const [val1 , setVal1] = useState("");
    const [val2 , setVal2] = useState("");
    const [val3 , setVal3] = useState("");
    const [val4 , setVal4] = useState("");
    const [val5 , setVal5] = useState("");
    const [val6 , setVal6] = useState("");
    const [val7 , setVal7] = useState("");
    const [val8 , setVal8] = useState("");

    const top1 = ()=>{
      setVal1("BEST_MATCH");
    }

    const top2 = ()=>{
        setVal1("TOP_RATED");
      }

      const top3 = ()=>{
        setVal1("LOWEST_PRICE");
      }

      const top4 = ()=>{
        setVal1("HIGHEST_PRICE");
      }

      const top5 = ()=>{
        setVal1("New");
      }
      const top6 = ()=>{
        setVal1("Used");
      }
      const top7 = ()=>{
        setVal1("Refurbished");
      }

      const top8 = ()=>{
        setVal1("1");
      }

      const top9 = ()=>{
        setVal1("2");
      }
      const top10 = ()=>{
        setVal1("3");
      } 
      const top11 = ()=>{
        setVal1("4");
      }
    return(

        <>
        
        <h1>THIS IS YOUR PRODUCTS {api1}</h1>

       <Dropdown>
        <DropdownToggle variant='danger' id='drop'>Sort By</DropdownToggle>

        <DropdownMenu>
            <DropdownItem onClick={top1} >BEST_MATCH</DropdownItem>
            <DropdownItem onClick={top2}>TOP_RATED</DropdownItem>
            <DropdownItem onClick={top3}>LOWEST_PRICE</DropdownItem>
            <DropdownItem onClick={top4}>HIGHEST_PRICE</DropdownItem>
        </DropdownMenu>
       </Dropdown>

       <Dropdown>
        <DropdownToggle variant='danger' id='drop'>Product Condition</DropdownToggle>

        <DropdownMenu>
            <DropdownItem onClick={top5} >New</DropdownItem>
            <DropdownItem onClick={top6}>Used</DropdownItem>
            <DropdownItem onClick={top7}>Refurbished</DropdownItem>
        </DropdownMenu>
       </Dropdown>

       <Dropdown>
        <DropdownToggle variant='danger' id='drop'>Minumam Rating</DropdownToggle>

        <DropdownMenu>
            <DropdownItem onClick={top8} >1</DropdownItem>
            <DropdownItem onClick={top9}>2</DropdownItem>
            <DropdownItem onClick={top10}>3</DropdownItem>
            <DropdownItem onClick={top11}>4</DropdownItem>
        </DropdownMenu>
       </Dropdown>

       <div className='container'>
            <h1>Product Title</h1>
            <div className='d-flex'>
        <h1 >Description :</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus sint libero atque? Consequatur voluptates, reprehenderit ipsa iure quasi exercitationem facilis. Corporis ex velit beatae mollitia deserunt aut porro recusandae.</p>
       </div>
       <div className='row'>
        <div className='col-3'>
        <div class="card">
        <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLWsxNnzBQ6GZ3VZwdKGivoRCWohddcGXhGAvJdGlnuXI4zTrBFNXENJht65jxYA5lD_Wq-Gg4czefkvnZYtbaf7IjZ6IfuQ&usqp=CAE' alt='pic' id='p1'/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
      <h3>title</h3>
  </div>

</div>
        </div>

        <div className='col-3'>
        <div class="card">
        <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLWsxNnzBQ6GZ3VZwdKGivoRCWohddcGXhGAvJdGlnuXI4zTrBFNXENJht65jxYA5lD_Wq-Gg4czefkvnZYtbaf7IjZ6IfuQ&usqp=CAE' alt='pic' id='p1'/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
      <h3>title</h3>
  </div>

</div>
        </div>

        <div className='col-3'>
        <div class="card">
        <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLWsxNnzBQ6GZ3VZwdKGivoRCWohddcGXhGAvJdGlnuXI4zTrBFNXENJht65jxYA5lD_Wq-Gg4czefkvnZYtbaf7IjZ6IfuQ&usqp=CAE' alt='pic' id='p1'/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
      <h3>title</h3>
  </div>

</div>
        </div>

        <div className='col-3'>
        <div class="card">
        <img src='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLWsxNnzBQ6GZ3VZwdKGivoRCWohddcGXhGAvJdGlnuXI4zTrBFNXENJht65jxYA5lD_Wq-Gg4czefkvnZYtbaf7IjZ6IfuQ&usqp=CAE' alt='pic' id='p1'/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
      <h3>title</h3>
  </div>

</div>
        </div>
    
      
       </div>

       <h1>price:"$123.95"</h1>
       <h1>shipping:"Free delivery by Tue, Mar 19"</h1>
       <h1>tax:"+$12.40 est. tax"</h1>
       <h1>product_condition:"NEW"</h1>
       
       </div>
    
        </>
    )
}
export default Search;