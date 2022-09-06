import React,{useState} from 'react'

export default function Storage() {
    const [state,setState]=useState('')
    const setData=()=>
    {
        let info={
            'name':'rohit',
            'course':'react'
        }
        localStorage.setItem('apple',JSON.stringify(info));
    }
    const showdata=()=>
    {
        let data=localStorage.getItem('apple');
        data=JSON.parse(data);
        console.log(data);
        setState(data);
    }

  return (
    <div>
        {state.name}
        <button onClick={setData}> Click</button>
        <button onClick={showdata}> ShowData</button>
        </div>
  )
}
