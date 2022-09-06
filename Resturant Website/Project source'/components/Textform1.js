import React,{useState} from 'react'

export default function Textform1() {
     //Crteate Function for Button Onchange  (Click) 
    const handle =()=>{
        console.log("Succesfull clicked");
     let newText=text.toUpperCase();        //For Uppercase
        setText(newText);


    }
    const change =(event)=>{
        console.log("Change");                 //change The Value
        setText(event.target.value);
        


    }
    const [text, setText] = useState("Enter Your Charcater " ); // Create The a Value
 
    return (
  
<div>
        <h1>Enter Your Text</h1>
        <form>
  <div style={{width:"200px;", height:"100px;"}}>
 
    <input type="email" className="form-control" value={text} onChange={change} id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <button onClick={handle}> Click</button>

    </div>
 
 </form>
 
 
     
    </div>
  )
}

