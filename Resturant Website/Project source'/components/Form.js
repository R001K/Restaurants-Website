import axios from 'axios';
import React,{useState,useEffect} from 'react'

export default function Form() {
    const [id,setId]=useState(1);
    const [post,setPost]=useState({});
    // useEffect({getData()},[id]);
    const getData=async()=>{

    
 
        try
        {
      let res=await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
     console.log(res.data);  
     setPost(res.data);  
     
    }
        catch(error)
        {
            console.log(error);
        }
}
useEffect(()=>{if(id>=1)getData()},[id]);
    return (
    <div>
 <input type="text" name="text"  value={id} onChange={e=>setId(e.target.value)} />
<br/>
{post.title}
<br/>
{post.body}
    </div>
  )
}
