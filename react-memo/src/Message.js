import { memo, useEffect, useMemo } from "react"

const Message = memo(function Message(props){

    useEffect(() => {
        console.log("Message Component Is Updaed");
    });

   return (
        <div className="card">
            <div className="card-body">{props.Message}</div>
        </div>
   ) 
});

export default Message;