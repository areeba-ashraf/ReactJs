import React,{Component} from "react";

class Card extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="hcard">
           <h1>This is the header card</h1>
           <h2>{this.props.invite}</h2>
           </div>
        );
    }
}

export default Card;