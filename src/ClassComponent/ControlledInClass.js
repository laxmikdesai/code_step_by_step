import React, { Component } from 'react'

export default class ControlledInClass extends Component {
    constructor()
    {
       super()
       {
           this.state={name:""}
       }
    }
    
      
    
       render() {
       return (
         <div>
            {/* <input type="text" ></input> */}
            hii
           
            <input type="taxt" onChange={(e)=>{this.setState({name:e.target.value})}}></input>
            <h1> {this.state.name}</h1>
         </div>
       )
     }
}
   

