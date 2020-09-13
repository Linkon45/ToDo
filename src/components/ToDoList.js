import React from 'react';
import Todo from './Todo'
const ToDoList = ({ todos,setTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo 
                    text={todo.text} 
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo}
                    
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;