import React,{useState} from 'react'
import Contact from './Contact'

export default function Fetch5() {

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
     }
  return (
    <div>
        <form action='' onSubmit={handleSubmit} >
        <label htmlFor="username">username</label>
      <input type="text" name="username"  value={username} onChange={handleChange} /><br/>
      <br/>
      <label htmlFor="userpass">userpass</label>
      <input type="password" name="userpass"  value={userpass} onChange={handleChange} />
      
      <br />
    <input type="submit" value="Login" />
      
      </form>
    </div>
  )
}
