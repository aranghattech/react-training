import logo from './logo.svg';
import './App.css';
import { Profiler, useEffect, useRef, useState } from 'react';
import ChildComp from './ChildComp';
import useLoginStatus from './useLoginStatus';
import Register from './Register';
import DemoChild from './DemoChild';
import handleOnRender from './profileDataCollector';
import TestComp from './TestComp';


function App() {

  let [userStatus,refreshStatus] = useLoginStatus();
  let [text,setText] = useState("Hello");

  const txtEmail = useRef();
  const txtPassword = useRef();

  const btnChildButton = useRef();
  

  useEffect(() => {
    //txtEmail.current.focus();
    //txtPassword.current.style.backgroundColor = "red";

    //btnChildButton.current.disabled = true;
  },[]);

  

  return (
    <div className="App">
      {/* <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
     <label>
        Email
      </label>
      <input type="email" ref={txtEmail}
      aria-label='Enter your password' />
      <label>
        Password
      </label>
      <input ref={txtPassword} type="password" />
      
      {userStatus ? <h1>Welcome User</h1> : <h1>Please Login</h1>}

      <ChildComp title="Child Comp 1" ref={btnChildButton}/> 

<Profiler id="Demo Client" onRender={handleOnRender}>
  <DemoChild title={text} />
</Profiler>
      <Register /> */}
      <TestComp />
    </div>
  );
}

export default App;
