import React from 'react';

export default class ToDoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    updateState() {
        this.setState({
            AssignedTo: "John",
            isCompleted: false
        });
    }

    componentDidMount() {
        console.log("Called Only Once after the component is mounted");
        var dataFromServer = this.getDataFromServer();
        this.setState([...dataFromServer]);
    }

    getDataFromServer(){
        console.log("Fetching data from server");
        return [{ id : 1, Title:"Test"}];
    }

    componentDidUpdate() {
        console.log("Called after the component is updated propos changed or state changed");
        
    }

    componentWillUnmount() {
        console.log("Called before the component is removed from the DOM");
    }

  markAsCompleted() {
    if(!this.state.isCompleted)
        this.setState({isCompleted:true});
    else 
        alert("The task is already commpleted");
  }

  render() {
    return (
        <div>{this.props.Title} <br />
             Assigned To: {this.state?.AssignedTo ? this.state?.AssignedTo : "Not Assigned"}
              {this.state?.isCompleted ? <p>Completed</p> : <p>Not Completed</p>}
             
             <button type='button' onClick={() => this.updateState()}>Initialize</button>
              <button type='button' 
                    onClick={() => this.markAsCompleted()}>
            Complete</button>
        </div>
    );
  }

}

