import React, { Component } from 'react'

export default class StateInClassComponent extends Component {
    constructor(props){
        super(props)
        {
          this.state={
            name:"Amruta"
          }
        }
      }
    render() {
    return (
      <div>
        <div className="container text-center" style={{backgroundColor:"skyblue"}}>
        <h1 className='center'>Props!</h1>
      <Student name={this.state.name}/>
 <button className='btn btn-warning' onClick={()=>this.setState({name:"Desai"})}>UpdateName</button> 
      </div>
      </div>
    )
  }
}
