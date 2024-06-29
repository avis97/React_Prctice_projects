import React from "react";
import "./Css/TodoList.css";
import not_tick from "./Assets/not_tick.png";
import tick from "./Assets/tick.png";
import cross from "./Assets/cross.png";

function TodoList({ no, display, text, setTodo }) {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todo"));
    data = data.filter((todo) => todo.no !== no);
    setTodo(data);
  };
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todo"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodo(data);
  };
  return (
    <div className="todo-item">
      <div
        className={`todo-item-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={not_tick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todo-item-text">{text}</div>
      </div>
      <img
        className="cross-img"
        onClick={() => deleteTodo(no)}
        src={cross}
        alt=""
      />
    </div>
  );
}

export default TodoList;
