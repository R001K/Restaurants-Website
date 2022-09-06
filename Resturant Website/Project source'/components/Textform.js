import React,{useState} from 'react'

export default function Textform() {
    const handle =()=>{
        console.log("UPPERCASE CLICKED" + text);
        let newText= text.toUpperCase();
        setText(newText);
    } 
    const onchange = (event)=>{
        console.log("Onchange");
        setText(event.target.value);
    }

 const [text, setText] = useState("Enter Here2");
//  setText="new Text";


  return (
    <div>
        <h1>Enter Your Detailes </h1>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={text} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp"/>

   <button className='but' onClick={handle}>Convert  </button>
   
  </div>
 
</form>


    </div>
  )
}
