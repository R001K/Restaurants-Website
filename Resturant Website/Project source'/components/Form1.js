import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Form1() {
  const initialstate={
      'username':'',
      'userpass':''
  }
  const [state,setState]=useState(initialstate);
  const [issubmit,setisSubmit]=useState(false);
  const [formerror,setFormError]=useState('');
  const {username,userpass}=state;
  const handleSubmit=(e)=>{
      e.preventDefault();
    //   console.log('button clicked');
    //   console.log(state);
    //   alert('button clicked');
    validation(state)
    setisSubmit(true);
  }
  const validation=(state)=>{
    const err={}
    const regname=/^[A-Za-z]+$/;

    const regpass= /^[A-Za-z0-9]{3,10}$/;
    if(!state.username){
        // alert('please fill username');
        err.username="please fill username";
    }
    if(!regname.test(state.username)){
      err.username="please fill character only";
    }
    if(!regpass.test(state.userpass)){
      err.userpass="please fill min 3 letter";
    }
    if(!state.userpass){
        // alert('please fill password');
        err.userpass="please fill userpass";
    }
    // console.log(err);
    setFormError(err);
  }
  useEffect(()=>{
const l=Object.keys(formerror).length;
if(l===0 && issubmit===true){
  axios.post(`http://localhost:4000/myapp`,state);
}
  },[formerror]);
  const handleChange=(e)=>{
// console.log(e.target.name);
// console.log(e.target.value);

const {name,value}=e.target;
// console.log(name);
// console.log(value);
setState({
    ...state,
    [name]:value
})
  }
    return (
    <div>
        {username}{userpass}
<form action="" onSubmit={handleSubmit}>
    <label htmlFor="username">username</label>
    <input type="text" name="username" value={username} onChange={handleChange}  />
    <span>{formerror.username}</span>
    <br />
    <label htmlFor="password">Password</label>
    <input type="password" name="userpass" value={userpass} onChange={handleChange} />
    <span style={{color:'red'}}>{formerror.userpass}</span>
    <br />
    <input type="submit" value="Save" />

</form>

    </div>
  )
}
