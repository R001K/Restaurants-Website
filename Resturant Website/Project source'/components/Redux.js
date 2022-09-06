import React, { Component } from 'react'
import { createStore } from 'redux'

export class Redux extends Component {
  render() {
//actions:-
function Increment(){
    return{
        type:Increment
    }

}
function Decrement(){
    return{
        type:Decrement
    }
}

const initialState={
    count:0,
    info:'Redux actions'
}
//logical s
const reducer=function(state=initialState,action){
    switch(action.type){
        case Increment:
            return{
                count:state.count+1
            }
        case Decrement:
            return{
                count:state.count-1
            } 
        default:return state;       
    }
}
const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
    console.log("now store is",store.getState());
})

console.log("initial state",store.getState());
    return (
      <div>
<button onClick={()=>store.dispatch(Increment())}>increment</button>
<button onClick={()=>store.dispatch(Decrement())}>decrement</button>
      </div>
    )
  }
}

export default Redux