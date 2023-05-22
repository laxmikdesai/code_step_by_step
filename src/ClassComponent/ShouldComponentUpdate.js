import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
 constructor(props)
 {
    super(props)
    {
        this.state={count:0}
    }
 }
 shouldComponentUpdate(){
    // console.warn("shouldComponentUpdate");
    // return true;//it block the code and state cannot update component cannot re-render
    if(this.state.count>5 && this.state.count<10)
    {
        return true
    }
 }
 componentDidUpdate()
 {
    console.warn("componentDidUpdate");
 }
    render() {
    return (
      <div>
        <h1>ShouldComponentUpdate:{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>update</button>
      </div>
    )
  }
}
