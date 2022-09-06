import React,{useState,useEffect} from 'react'

export default function Fetch() {
    const [post,setPost]=useState([])          // Define Userdefined Variable Here
     useEffect(()=>{
        let res=fetch('https://jsonplaceholder.typicode.com/posts');
        res.then(d=>{
           d.json().then(data=>{
       console.log(data);
       setPost(data);
        })
    }

        ).catch=(error)=>{
              console.log(error);
        }
   
    },[])
// fetch('https://jsonplaceholder.typicode.com/posts').then(res=>{     // Code for handling the response
//    res.json().then(data=>{
//     console.log(data);
//    })
  
// }).catch((error) => {
//     console.log(error)
//     // Code for handling the error
//   })


    return (
    <div>
  
       {post.reverse().slice(0,5).map((e,index)=><li key={index}>{e.id}{e.title}</li>)}

    </div>
  )
}
