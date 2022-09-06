
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Log1() {
  const navigate=useNavigate();
  const n=localStorage.getItem('Name');
  const p=sessionStorage.getItem('Pass');
  console.log(n);
  console.log(p);

  
  useEffect(()=>  {
    if(!p){
      navigate('/Login');
    }
  })
  const Logout=()=>
  {
        localStorage.removeItem('Name');
        sessionStorage.removeItem('Pass');
        navigate('/Login');
  }
  return (
    <div>
       Weclome  {n} 
       <button onClick={Logout}>Logout</button>
       {/* {n?'Login':navigate('/Login')}
    */}
    </div>
  )
}
