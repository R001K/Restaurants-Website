import React,{useState,useEffect} from 'react'

import axios from 'axios'


export default function Fetch4() 

{
    const [post,setPost]=useState([])
    useEffect(()=>{
    async function getData(){
    try{
        const res=await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    console.log(res.data);
    setPost(res.data);
    }
    catch(err){
        console.log(err);
    }
  }
    getData()
    },[])
  return (
  
  <div>
         <table style={{width:'70rem', height:'40rem'}}>
        <thead>
          <tr>
            <th>id</th>  
      </tr>
         </thead>
        <tbody>
{post.map((e,index)=><tr key={index}>
<td>{e.id}</td>

{/*  
  <td>{e.firstName}</td>
  <td>{e.lastName}</td>
  <td>{e.email}</td>
  <td>{e.contactNumber}</td>
  <td>{e.age}</td>
  <td>{e.dob}</td>
  <td>{e.salary}</td>
  <td>{e.address}</td> */}
  
   {/* <td>
    <Link to={`/Edit/${e.id}`}>Edit</Link>
    <Link to={`/Delete/${e.id}`}>Delete</Link>
     </td>  */}
  
  </tr>)}
 
</tbody>
</table>

 </div>
  )
}
