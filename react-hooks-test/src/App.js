import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import ChildComp from './ChildComp';
import useLoginStatus from './useLoginStatus';
import Register from './Register';


function App() {

  let [userStatus,refreshStatus] = useLoginStatus();

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
      {/* <label>
        Email
      </label>
      <input type="email" ref={txtEmail}
      aria-label='Enter your password' />
      <label>
        Password
      </label>
      <input ref={txtPassword} type="password" />
      
      {userStatus ? <h1>Welcome User</h1> : <h1>Please Login</h1>}

      <ChildComp title="Child Comp 1" ref={btnChildButton}/> */}

      <Register />
    </div>
  );
}

export default App;
