import React, { Component } from 'react'

export default class Student extends Component {
  constructor()
  {
    super()
    {

    }
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
    render() {
    return (
      <div>
        Welcome to Student Class
      </div>
    )
  }
}
