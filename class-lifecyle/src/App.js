import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem';
import ToDoItemFunc from './ToDoItemFunc';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  //Create a state to store the todoItems
  let [toDoItems,setToDoItems] = useState([]);
  let [todoItem,setNewItem] = useState("");

  //Pull the data from the server
  useEffect(() => {
    axios.get("http://localhost:8080/todoitems")
         .then(response => setToDoItems(response.data));
  },[]);

  //On button Click
  function addItem() {
    if(todoItem.length > 0) {
        axios.post("http://localhost:8080/todoitems"
                ,{ Title: todoItem, IsCompleted: false})
              .then(response => {
                setToDoItems([...toDoItems,response.data]);
                setNewItem("");
              })
              .catch(error => console.log(error));
    }
  }

  //Mark As Completed
  function markAsCompleted(id) {
    var item = toDoItems.find(item => item.id === id);
    item.IsCompleted = true;
    axios.put("http://localhost:8080/todoitems/" + id,item)
         .then(response => {
            let updatedItems = toDoItems.map(item => {
              if(item.id === id)
                  item.IsCompleted = true;
              return item;
            });
            setToDoItems([...updatedItems]);
         });
  }

  //Delete Item
  function onDelete(id) {
    if(window.confirm("Do you really want to delete this item"))
    {
      axios.delete("http://localhost:8080/todoitems/" + id)
          .then(response => {
              let updatedItems = toDoItems.filter(item => item.id !== id);
              setToDoItems([...updatedItems]);
          });
        }
  }


  return (
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>ToDo Items</h1>
              <div className='list-group'>
                  <div className='list-group-item'>
                     <div className='input-group'>
                        <input type='text' className='form-control' onChange={(event) => 
                          setNewItem(event.target.value)} />
                        
                        <button type='button' className='btn btn-primary'
                          onClick={() => addItem()}>Add</button>
                        
                     </div>
                  </div>
                  { toDoItems.map(item =>
                      <div className='list-group-item'>
                        <ToDoItemFunc IsCompleted={item.IsCompleted} 
                              Title={item.Title} 
                              id={item.id} 
                              onCompleted={markAsCompleted} 
                              onDelete={onDelete}
                              />
                      </div>
                    )}
              </div>
            </div>
          </div>
            
        </div>
  );
}

export default App;
