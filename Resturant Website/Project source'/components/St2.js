import React, { Component } from 'react'

export default class St2 extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      count:0
   }
 }
 Increment=()=>
  {
   // alert('buuton click');
   this.setState({
   count:this.State.count+1
   })
   console.log();
  }
    render() {
    return (
      <div>
            {this.state.count}
        <button onClick={()=>this.Increment()}>click</button>
      </div>
    )
  }
}
