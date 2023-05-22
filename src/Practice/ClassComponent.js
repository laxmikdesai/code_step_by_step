import React, { Component } from 'react'

export default class ClassComponent extends Component {
 constructor()
 {
    super()
    {
        this.state={name:"laxmi"}
    }
 }
 componentDidMount()
 {
   console.log("Welcome to componentDidMount");
 }
 componentDidUpdate(prevprops,prevstate){
    console.log("componentDidUpdate");
    
 }
shouldComponentUpdate()
{
    console.log("shouldComponentUpdate")
    return(true);
}
getSnapshotBeforeUpdate(prevprops,prevstate)
{
    console.log("shouldComponentUpdate",prevstate)
}
    render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"desai"})}}>update</button>
      </div>
    )
  }
}
