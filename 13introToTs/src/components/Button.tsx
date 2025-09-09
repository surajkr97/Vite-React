import React, { useState } from "react";

interface MyButtonProps {
    text: string | number | boolean;
    onClick?:() => void;
}



const MyButton: React.FC<MyButtonProps> = (props) => {

    // const {text, onClick} = props;
    const [value, setValue] = useState(1);

    return <div>
        <h3>{value}</h3>
        <button onClick={()=>{setValue(value +1)}}>Increment</button>
        {/* <button onClick={props.onClick}>{props.text}</button> */}
    </div>;
}

export default MyButton;