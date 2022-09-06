import React, { Component } from 'react'
//console.log(this.props);
import Button from 'react-bootstrap/Button';
export class Third extends Component {
  render(props) {
    const {name,course,children,title,data,im}=this.props;
    return (
      <div>
       {name}
       {course}
       {children}
       {title}
       {data}
       {/* <Button variant="primary">{props.children}</Button> */}
 <img src='images/siya5.jpg' width="400px" height="500px"/>
 <img src='images/siya4.jpg' width="400px" height="500px"/>
 <p scr="imgsrc"></p>

 <Button variant="success">click</Button>

      </div> 
    )
  }
}

export default Third