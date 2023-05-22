
import React,{Component} from "react";
export default class CmponentDidMoutn extends Component
{
    constructor(props)
    {
        super(props)
        {
            this.state={color:"Green",
          name:props.data}
        }
    }
    componentDidMount()
    {
         setTimeout(()=>{
        this.setState({color:"yellow"})},1000)
        
    }
    getSnapshotBeforeUpdate(preprops,prevstate){
        document.getElementById("x").innerHTML="PreviouseState is :"+prevstate.color;
        document.getElementById("x").style.background="skyblue";
    }
    componentDidUpdate(){
        document.getElementById("y").innerHTML="udated value of state:"+this.state.color;
        document.getElementById("y").style.color="blue";
    }
    render()
    {
        return(<div className=" container bg-secondary" style={{height:"400px"}}>Welcome
        <p id="x"></p>
        <p id="y"></p>
        <p>{this.state.name}</p>
        </div>);
    }
}
