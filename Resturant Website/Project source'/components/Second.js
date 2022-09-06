import React from 'react'     // rfc= React function component
import'./style/Second.css'
import Button from 'react-bootstrap/Button';
export default function First(props) {
 //console.log(props);
 const {course,fees,children}=props;
    return (
      <div className='head'>
       {props.course}<br/>
      {props.fees}
       
 <div className='l1'>
 {course} 
 </div>
 <div className='l2'>
 {fees}
 </div>
 <h1>{children}</h1>
 <Button variant="info">info</Button>

 </div>


  )
}
