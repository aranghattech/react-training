import { Component, PureComponent } from "react";

export default class MessageClass extends PureComponent {
    constructor(props){
        super(props);
        console.log("Message Class Component Is Constructed");
    }

    componentDidUpdate(){
        console.log("Message Class Component Is Updated");
    }

    render(){
        return (
            <div className="card">
                <div className="card-body">{this.props.Message}</div>
            </div>
        )
    }
}