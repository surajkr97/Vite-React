import { useSelector } from "react-redux";


const DisplayCount = () => {
    const count = useSelector((state) => state.counter.value);

  return (
    <h1>
      This is the Second Count Dispaly: {count}
    </h1>
  )
};

export default DisplayCount;
