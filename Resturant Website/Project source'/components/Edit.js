import React,{useState, useEffect, useParams} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
    const {id}=useParams();
    const navigate = useNavigate();
    const initialstate={
      firstName:'',
      lastName:''
}

const handlechange=(e)=>{
 const {name,value}=e.target;
 setState({
     ...state,
     [name]:value
 })   
}
const [state,setState]=useState(initialstate);
// console.log(id);
const getData=async()=>{
let res=await axios.get(`https://hub.dummyapis.com/employee/${id}`);

// console.log(res.data);
console.log(res.data[0].firstName);
console.log(res.data[0].lastName);
setState(res.data[0]);
}
useEffect(()=>{getData();},[]);

const handleSubmit=async(e)=>{
    e.preventDefault();
    //console.log(state);
await axios.put(`https://hub.dummyapis.com/employee/${id}`,state);
navigate('/Fetch');
}

   return (
    <div>
       <form onSubmit={handleSubmit} >
  <label htmlFor='firstName'>firstName</label>
  <input type="text" name='firstname'  value={state.firstName} onChange={handlechange}  />
  <br/>

  <label htmlFor='lastName'>lastName</label>
  <input type="text" name='lastName'     value={state.lastName} onChange={handlechange}  />
  <br/>

  <button value="Edit">Update</button>
    
  </form>
    </div>
  )
  }
 