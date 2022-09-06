import React,{useState,useEffect} from 'react'

import axios from 'axios'
export default function Fetch1() {
    const [post,setPost]=useState([])
    useEffect(()=>{
axios.get(`https://fakestoreapi.com/products`).then(res=>{
    console.log(res.data);
    setPost(res.data);
}).catch=(err)=>{
    console.log(err);
}
    },[])
  return (
    <div>
{post.map((e,index)=><li key={index}>{e.id}</li>)}

    </div>
  )
}
