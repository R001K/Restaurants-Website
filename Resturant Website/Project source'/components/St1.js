import { Button } from 'bootstrap'
import React, { Component } from 'react'

export default class St1 extends Component {
   Increment=()=>
  {
   // alert('buuton click');
   this.setState({
   msg:"after noon"
   })
  }
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'good mornig'
      }
    }
   
  render() {
    return (
      <div>
      <h1 style={{color:'red'}}> {this.state.msg}</h1>
     
        {this.state.count}
        <button onClick={()=>this.Increment()}>click</button>

      </div>
    )
  }
}
