 import './Author.css'
 
 const Author=({image, name, popular_book_title, number_published_books})=>{
    return(

        <div className='col-4'>
        <div className='card p-3 mx-3 my-3' id='poo'>
            <img className='card-img-top' src={image} id="sup" />

            <div className='card-title'>Title : {popular_book_title}</div>
            <div className='card-title'>Author Name : {name}</div>
            <div className='card-title'>No of Published Books : {number_published_books}</div>

            
        </div>
    </div>
    )
 }
 export default Author;