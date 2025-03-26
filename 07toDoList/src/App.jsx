import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(()=>{
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("todos");
  //   if (savedTodos) setTodos(JSON.parse(savedTodos));
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (!todo.trim()) return;
    setTodos([{ id: uuidv4(), todo, isCompleted: false }, ...todos]);
    setTodo("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    console.log(`this is id :- ${id}`);
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto m-5 rounded-xl p-5 bg-violet-200 min-h-[88vh] md:w-1/2 ">
        <h1 className="text-3xl font-bold flex justify-center m-2">iTask - Manage Your Todos At One Place</h1>
        <div className="addTodo">
          <h2 className="text-xl font-bold my-5"> ⦿ Add a Todo</h2>
          <div className="flex">
          <input
            onChange={handleChange}
            onKeyDown={handleKey}
            value={todo}
            className="bg-amber-50 rounded-full px-2 py-1 w-full"
            type="text"
          />
          <button
            disabled={todo.length === 0}
            onClick={handleAdd}
            className="disabled:bg-violet-500 bg-violet-800 hover:bg-violet-950 text-white font-bold p-2 rounded-full ml-2 w-20 cursor-pointer"
          >
            Save
          </button>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-8 mb-2">☞ Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="text-center text-gray-700 italic">Your todo list is empty. Start by adding a new task! ✨</div>
          )}
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex py-2">
                <input
                  className="m-2 w-6 h-6 text-blue-600 border-2 border-gray-300 rounded-md cursor-pointer"
                  type="checkbox"
                  name={item.id}
                  checked={item.isCompleted}
                  onChange={handleCheckBox}
                />
                <div
                  className={`${
                    item.isCompleted ? "line-through" : ""
                  } flex items-center text-xl px-2 rounded-md w-1/2`}
                >
                  {item.todo}
                </div>
                <div className="buttons my-1">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-violet-800 hover:bg-violet-950 text-white font-bold px-2 rounded-md mx-2 py-1 cursor-pointer"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="bg-violet-800 hover:bg-violet-950 text-white font-bold px-2 rounded-md py-1 cursor-pointer"
                  >
                    <RiDeleteBin6Line />
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
