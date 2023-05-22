import React, { Component } from 'react'
import Student from './Student';

export default class ComponentWillUnmount extends Component {
  constructor()
  {
    super()
    {
        this.state={value:true};
    }
  }
    render() {
    return (
      <div>
        {this.state.value?<Student/>:<h1>Remove</h1>}
        <button onClick={()=>{this.setState({value:!this.state.value})}}>Remove </button>
      </div>
    )
  }
}
