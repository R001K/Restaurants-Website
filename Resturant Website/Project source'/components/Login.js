import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
      const initialstate={
        'username':'',
        'userpass':''
    }
    
    const [state,setState]=useState(initialstate);
    const {username,userpass}=state; 
    const handleChange=(e)=>{
        
        const {name,value}=e.target;
        setState({
            ...state,
            [name]:value
        })
          }
          const handleSubmit=(e)=>{
             e.preventDefault();
        if(state.username==="admin" && state.userpass==="1234")
        {
        // console.log('Redirect To Other Page');
      localStorage.setItem('Name',state.username);
      sessionStorage.setItem('Pass',state.userpass);
        navigate('/Log1');
        }
        else
        {
            console.log("Not Rediect");
        }
          }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
      <label htmlFor="username">username</label>
      <input type="text" name="username" value={username} onChange={handleChange}  />
      
    <br />
    <label htmlFor="password">Password</label>
    <input type="password" name="userpass" value={userpass} onChange={handleChange} />
  
    <br />
    <input type="submit" value="Login" />

   </form>
    </div>
  )
}
