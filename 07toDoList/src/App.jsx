import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {};

  const handleDelete = (e, id) => {
    console.log(`this is id :- ${id}`)

    const updatedTodos = todos.filter(item=>item.id !== id);
    setTodos(updatedTodos)
  };

  const handleAdd = () => {
    setTodos([{ id: uuidv4(), todo, isCompleted: false }, ...todos]);
    setTodo("");
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[88vh]">
        <div className="addTodo">
          <h2 className="text-xl font-bold my-5">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            className="bg-amber-50 rounded-lg px-2 py-1 w-1/2"
            type="text"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 text-white font-bold px-2 py-1 rounded-md mx-6"
          >
            Add Task
          </button>
        </div>
        <h2 className="text-xl font-bold my-4">Your Todos</h2>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex py-2">
                <input className="m-2 w-6 h-6 text-blue-600 border-2 border-gray-300 rounded-md cursor-pointer"
                  type="checkbox"
                  name={item.id}
                  value={item.isCompleted}
                  onChange={handleCheckBox}
                />
                <div
                  className={`${
                    item.isCompleted ? "line-through" : ""
                  } bg-violet-50 text-xl px-2 rounded-md w-4/9`}
                >
                  {item.todo}
                </div>
                <div className="buttons my-1">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-800 hover:bg-violet-950 text-white font-bold px-2 rounded-md mx-2 py-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e)=>{handleDelete(e, item.id)}}
                    className="bg-violet-800 hover:bg-violet-950 text-white font-bold px-2 rounded-md mx-2 py-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
