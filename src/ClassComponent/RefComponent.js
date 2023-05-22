import React, { Component, createRef } from 'react'

export default class RefComponent extends Component {
 constructor()
 {
    super()
    {
        this.refproperty=createRef();
    }
 }
 componentDidMount()
 {
    // console.log(this.refproperty.current.value="1000");
 }
  getValue() {
    console.log(this.refproperty.current.value);
    this.refproperty.current.style.backgroundColor="yellow";
    this.refproperty.current.style.color="white";

 }
    render() {
    return (
      <div>
        welcome
        <input type="text" ref={this.refproperty}></input>
        <button onClick={()=>this.getValue()}>Use ref</button>
      </div>
    )
  }
}
