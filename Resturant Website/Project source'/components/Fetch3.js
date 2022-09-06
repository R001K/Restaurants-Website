import React, {useState,useEffect} from 'react'
import axios from 'axios'
import  './style/Fetch3.css';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Fetch3() {
    const [post,setPost]=useState([])
    useEffect(()=>
    

      async function getdata(){
        try{
const res=await axios.get(`https://fakestoreapi.com/products`);
    console.log(res.data); 
    setPost(res.data); 
        }
        catch(err)  
        { 

  console.log(err);
}
getdata()

    },[])
 



  return (
     //   Third Div For Second Product (Purse)
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  />
     
      <Card.Body>
      <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title> 
        {post.map((e,index)=><li key={index}>Title: {e.title} <br/> Price: {e.price}  
    <br/>
       </li>)}  
       
        <Card.Text></Card.Text>
     </Card.Body>
    </Card>

    
{/*  
    //  Second Div For Second Product (Shirt) */}
       <div className='shirt'>
       <Card style={{ width: '18em' }}>
     <Card.Img variant="top" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"  />
    
     <Card.Body>
     <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title> 
     {post.map((e,index)=><li key={index}>ID:{e.id}  <br/> Price:  {e.price}  <br/> Description:{e.description} <br/> Category:{e.category} <br/> Rating:{e.rating} </li>)}   
 
       <Card.Text></Card.Text>
    </Card.Body>
   </Card>
     
     {/* //   Third Div For Second Product (Jacket) */}

   <div className='jacket'>
       <Card style={{ width: '24em' }}>
     <Card.Img variant="top" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
    
     <Card.Body>
     <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title> 
      {/* {post.map((e,index)=><li key={index}>Price:  {e.price}  <br/>{e.description}</li>)}  
       */}
       <Card.Text></Card.Text>
    </Card.Body>
   </Card>

   
    
</div>
   </div>
   </div>


  )
}
