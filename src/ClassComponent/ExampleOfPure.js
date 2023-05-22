import React, { Component, PureComponent } from 'react'

export default class ExampleOfPure extends PureComponent {
 constructor()
 {
  super()
  {
    this.state={name:"laxmi"}
  }
 
 }
  
  render() {
    console.log("rerendering");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"desai"})}>update</button>
       
      </div>
    )
  }
}
