import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState();

    const handleNameChange = ()=>{
        setName('Hello World')
    }
    return(
        <>
        <p>Name: {name}</p>
        <button onClick={handleNameChange}>Click Here</button>
        </>
    );
}

export default MyComponent;