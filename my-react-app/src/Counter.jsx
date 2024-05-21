import React, {useState} from "react";

function Counter(){
const [number, setNumber] = useState(0)

const incrementNumber = ()=>{
    setNumber(number + 1);
}

const decrementNumber = ()=>{
    setNumber(
        number -1
    );
}

const resetNumber = ()=>{
    setNumber(0);
}

return(
    <div className="counter">
        
        <p>{number}</p>
        <button className="counterButtons" onClick={decrementNumber}>-</button>
        <button className="counterButtons" onClick={resetNumber}>Reset</button>
        <button className="counterButtons" onClick={incrementNumber}>+</button>
        
    </div>
);
}

export default Counter;