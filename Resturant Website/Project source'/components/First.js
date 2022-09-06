import React from 'react'     // rfc= React function component
import'./style/First.css'
import Button from 'react-bootstrap/Button';
export default function First(props) {
 //console.log(props);
 const {course,fees,children,data}=props;
    return (
        <div className='head'>
        {props.course}<br/>
        {props.fees}
       
 <div className='header'>
 {course} 
 </div>
 <div className='footer'>
 {fees}
 </div>
 <h1>{children}</h1>
<Button variant="warning">{props.data}</Button>
<Button variant="primary">primary</Button>
{/* <img src='images/siya5.jpg' width="400px" height="500px"/> */}

 </div>

  )
}
