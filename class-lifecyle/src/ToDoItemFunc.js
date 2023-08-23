import { useEffect, useState } from "react";

export default function ToDoItemFunc(props) {

    let [isCompleted,setIsCompleted] = useState(false);
    let [assignedTo,setAssignedTo] = useState("");

    //1. Called On Mout and Update
    useEffect(() =>  console.log("Will be called everytime on create and update"));


    //2. Called Only On Mount
    useEffect(() => console.log("Will be called only on mount"),[]);

    //3. Called Only On Update
    useEffect(() => console.log("Will be called when the task is completed"),[isCompleted]);
    useEffect(() => console.log("Will be called when the task is assigned"),[assignedTo]);
    //useEffect(() => console.log("Will be called when the task is assigned"),[assignedTo,isCompleted]);

    
    //4. Called Only On Unmount
    //useEffect(() => () =>  alert("Its getting unmounted"),[]);
       
    
    
    return (
        <div>
            <h3>{props.Title}</h3>
            <p>{props.IsCompleted ? "Completed" : "Not Completed"}</p>
            { !props.IsCompleted &&  <button type="button" onClick={() => props.onCompleted(props.id)}>Complete</button> }
            { <button type="button" onClick={() => props.onDelete(props.id)}>Delete</button> }
        </div>
    );
}