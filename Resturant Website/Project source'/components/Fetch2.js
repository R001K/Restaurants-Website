import React,{useState,useEffect} from 'react'
import  './style/Fetch2.css';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Fetch2() {
  
    const [post,setPost]=useState([])
    useEffect(()=>
    

      async function getdata(){
        try{
const res=await axios.get(`https://jsonplaceholder.typicode.com/posts`);
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
    <div className="id">
      {/* <h1 className="title" > Products API </h1> */}
     
            <table style={{width:'50rem'}}>
              <thread>
                <tr> 
                <th> UserId</th>
                <th>Title</th>
                <th>Action </th>
               </tr>
                
               </thread>
              <tbody> 
      {post.map((e,index)=><tr key={index}>
      <td> {e.id} </td>
      <td>{e.title} </td>
      <td>
        <Link to={`/Edit/${e.id}`}>Edit</Link>
         Delete</td> 
      </tr>)} 

      </tbody>
      </table>
   </div>


   

   

  
  )
}

