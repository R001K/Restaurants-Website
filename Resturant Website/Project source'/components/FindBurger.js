import React,{useState} from 'react'
import'./style/FindBurger.css'
import { useNavigate } from 'react-router-dom';
export default function FindBurger() {
function login()
{
  if(Name==="" && pass==="")
  {
 alert("Fill The Feilds");
  }
  else
  {
    alert("Register Succesfully");
  }
}
const navigate=useNavigate();
const initialstate={
  'Name':'',
  'pass':''
}

    
const [state,setState]=useState(initialstate);
const {Name,pass}=state; 
const {username,userpass}=state; 
const handleChange=(e)=>{
    
    const {name,value}=e.target;
    setState({
        ...state,
        [name]:value
    })
      }

const handleSubmit=(e)=>{
// e.preventDefault();
// if(Name==="" && pass==="")
// {


// navigate('/FindBurger');
// }
// else
// {
//   navigate('/menu');
// console.log("not");
// }
}



  return (
    <div className='main' >
    Welcome To Dragron Burger Challenge<br/>
      <p className='find2' >
         Register Here!!! </p>  

         <div className='register'>
          <form action="" onSubmit={handleSubmit}  >
          <label htmlFor="Name">Enter Full Name</label>
      <input type="text" name="Name"  value={Name} onChange={handleChange}  />
      
    <br />
    <br />
    
    <label htmlFor="password"> Create Password</label>
    <input type="password" name="pass" value={pass} onChange={handleChange} />
  
    <br />   <br />   
    <input type="checkbox" name="check"  /> Read And Allow Privacy&Policy
      <br />
  <centre className='centre'> <input type="submit" value="Login" onClick={login} /></centre> 
  </form>
         </div>
       </div>
  )
}

