import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor(props) {
        super(props)
        {
            this.state = { name: 0 }
            console.warn("constructor");
        }

    }
    componentDidUpdate(prevprops, prevstate) {
        console.log("componentDidUpdate", prevstate, this.state.name);
        //     if(this.state.name<10)
        //     {this.setState({name:this.state.name+1})}
        //   }
        if (prevstate.name === this.state.name) {
            alert("data is already enter");
            console.log("data");
        }
    }
    render() {
        console.warn("render");
        return (
            <div>
                <h1>Welcome{this.state.name}</h1>
                {/* <button onClick={()=>{this.setState({name:this.state.name+1})}}>Update</button> */}
                <button onClick={() => { this.setState({ name: 1 }) }}>Update</button>
            <button>save</button>
            </div>
        )
    }
}
