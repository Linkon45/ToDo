import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {


    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value);
    }

    const submitTextHandler = (e) => {
        e.preventDefault();

        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);

        setInputText("");
    }

    const changeStatus = (e) => {
        setStatus(e.target.value);
    }



    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTextHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onChange={changeStatus} className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
}

export default Form;