import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Message from './Message';
import MessageClass from './MessageClass';

function App() {

  let [message,setMessage] = useState([
    "Hello World",
    "Hello Universe",
    "Hello React",
    "Hello Angular"
  ]);
  let [count,setCount] = useState(1);

  return (
    <div className="App">
       {
          message.map((m,index) => {
            return <Message key={index} Message={m}></Message>
          })
       }

 <hr></hr>
 {
          message.map((m,index) => {
            return <MessageClass key={index} Message={m}></MessageClass>
          })
       }
        <button onClick={() => { setCount(++count);}} className="btn btn-primary">Update Counter</button>

        <button onClick={() => {
          message[0] = "Hello World" + Date.now();
          setMessage([...message]);
        } } className="btn btn-primary">Update Message</button>

        {count}
    </div>
  );
}

export default App;
