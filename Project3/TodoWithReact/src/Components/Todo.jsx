import React, { useEffect, useRef, useState } from "react";
import "./Css/Todo.css";
import TodoList from "./TodoList";

let count = 0;
function Todo() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);
  const add = () => {
    setTodo([
      ...todo,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todo-count", count);
  };

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todo")));
    count = localStorage.getItem("todo-count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todo);
      localStorage.setItem("todo", JSON.stringify(todo));
    }, 100);
  }, [todo]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
        />
        <div onClick={add} className="to-do-add">
          Add
        </div>
      </div>
      <div className="todo-list">
        {todo.map((item, index) => {
          return (
            <TodoList
              key={index}
              no={item.no}
              display={item.display}
              text={item.text}
              setTodo={setTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
