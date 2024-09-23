import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [Todos, setTodos] = useState([
    { task: "sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setnewTodo] = useState([""]);
  let newTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]; //Spread Method is used for adding
    });
    //Anything we type in placeholder it gets added into the Taska as new Tasks
    setnewTodo([""]);
  };
  let updateTodoValue = (event) => {
    setnewTodo(event.target.value); //To set the value in state
  };
  let deleteTodo = (id) => {
    setTodos(Todos.filter((todo) => todo.id != id)); //Method for filtering out the tasks => Used for removing arrays
  };

  let uppercaseAll = () => {
    setTodos(
      Todos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() }; //Method to convert into Uppercase();
      })
    );
  };

  let MarkasDone = (id) => {
    setTodos(
      Todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true }; //Method to convert into Uppercase();
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <br></br>
      <button onClick={newTask}>Add Task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Todo Lists</h4>
      <ul>
        {Todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.isDone ? { textDecorationLine: "line-through" } : {}
                }
              >
                {todo.task}
              </span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => MarkasDone(todo.id)}>Mark As done</button>
            </li>
          );
        })}
      </ul>
      <br></br>
      <button onClick={uppercaseAll}> UpperCase All</button>
    </div>
  );
}
