import Message from "./message";
import { useState } from "react";


export default function Home() {

    const date = new Date();
    const messaage = date.getHours() >= 12 ? 
              'Good Afternoon'
             : 'Good Morning';

    function additionalMessage()
    {
        let weekMessage = '';
        switch(date.getDay())
        {
            case 0: weekMessage = 'Weekend'; break;
            case 1: weekMessage = 'Happy Monday'; break;
            case 2: weekMessage = 'Happy Tuesday'; break;
            case 3: weekMessage = 'Happy Wednesday'; break;
            case 4: weekMessage = 'Happy Thursday'; break;
            case 5: weekMessage = 'Thank god its friday'; break;
            case 6: weekMessage = 'Weekend'; break;
            default: weekMessage = 'Happy Day'; break;
        }

        return weekMessage;
    }

    let [messages,setMessageValue] = useState([
        { id : 1, messaage : 'Good Morning', isactive : 'true', color : 'red'},
        { id : 2,messaage : 'Good Afternoon', isactive : 'true', color : 'green'},
        { id : 3,messaage : 'Good Evening', isactive : 'true', color : 'blue'},
        { id : 4,messaage : 'Hello there', isactive : 'true', color : 'yellow'},
        { id : 5,messaage : 'Good Night', isactive : 'true', color : 'grey'},
    ]);

    function onUserClick(message){
         alert(message);
    }

    let [totalElements,setTotalElements] = useState(messages.length);
  

    function deleteMessage(id){
         messages = messages
                    .filter(m => m.id != id);
       
        //totalElements = messages.length;
        setMessageValue([...messages]);
        setTotalElements(messages.length);
        //alert(totalElements);
        console.log(messages);
    }

    let [message,setMessage] = useState('');
    function onAddMessage(){
        messages.push({id : messages.length + 1, messaage : message, isactive : 'true', color : 'red'});
        setMessageValue([...messages]);
        setTotalElements(messages.length);
        setMessage('');
    }

    return (
        <div className="container">
            <h1>{messaage}, {additionalMessage()}</h1>
            <h3>Total Messages : {totalElements}</h3>
            <div className="list-group">
            <div className="list-group-item">
                <div className="input-group">
                    <input type="text" 
                    onChange={(event) => {console.log(event);setMessage(event.target.value);}}
                    className="form-control" placeholder="Enter Message" 
                    />
                    <button type="button"
                        onClick={onAddMessage}
                    className="btn btn-primary">Add Message</button>
                </div>
            </div>
          {
                messages.map((m, index) => 
                   <div className="list-group-item">
                     <Message key={index} 
                            id={m.id} 
                            message={m.messaage}
                             isactive={m.isactive}
                             color={m.color} 
                             onRowSelected={deleteMessage}
                             ></Message>
                   </div>
                )
          }
          </div>

           {/* <Message 
                    message="Hello First Component"
                    color="red"
                    isactive='true'
                    ></Message>
            <Message
             color="green"
             isactive='false'
             message="Hello Second Component"
            ></Message>
            <Message
            color="blue"
            ></Message>
            <Message></Message> */}
        </div>
    )

}