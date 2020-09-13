import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos,setTodos]=useState([]);

  return (
    <div className="App">
      <header>
        <h1> Linkon's ToDo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
