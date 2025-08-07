import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/counter";
import DisplayCount from "./components/DisplayCount";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <div>Redux Counter App</div>
      <div>Count is {count}</div>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <DisplayCount />
    </>
  );
}

export default App;