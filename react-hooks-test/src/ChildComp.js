import { forwardRef } from "react";
import useLoginStatus from "./useLoginStatus";

const ChildComp = forwardRef((props, ref) => {

    let [status,refreshStatus,alertHello] = useLoginStatus();

    return (
        <div>
            <h1>{props.title}</h1>
            <button type="button"
                ref={ref}
            // onClick={() => 
            //     ref.current.style.backgroundColor 
            //     = "green"}
            >Change Color</button>

           {status && "You are "}

           { !status &&   <button type="button" onClick={()=> {
                localStorage.setItem("userStatus","abcd");
                refreshStatus();    
                alertHello();
           }}>Set Login Satus</button> }
        </div>
    )
});

export default ChildComp;

