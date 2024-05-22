import React, {useState} from "react";

function ChangeEventHandler(){

    const [name, setName] = useState('');

    const [age, setAge] = useState();
    const [course, setCourse] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    

    const changeAgeEventHandler = (event)=>{
        setAge(event.target.value);
    }

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }

    const handleCourseChange = (event)=>{
        setCourse(event.target.value);
    }

    const handleDeliveryMethodChange = (event)=>{
        setDeliveryMethod(event.target.value);
    }
    return(
        <>
            <p>Enter your name: {name}</p>
            <input type="text" name="name" onChange={handleNameChange}/>

            <p>Enter your age: {age}</p>
            <input type="number" name="number" onChange={changeAgeEventHandler} />
            <p>Course: {course}</p>

            <select name="course" onChange={handleCourseChange}>
                <option value="">Select your course</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Computer Science">Computer Science</option>
            </select>

            <p>Delivery method: {deliveryMethod}</p>
            <label>
                <input 
                    type="radio" 
                    name="deliveryMethod"
                    value= 'Full time' 
                    checked = {deliveryMethod === 'Full time' } 
                    onChange={handleDeliveryMethodChange}
                    />
                Full time
            </label>
            <br />
            <label >
                <input
                     type="radio"
                     name="deliveryMethod" 
                     value='Part time' 
                     checked = {deliveryMethod === 'Part time'} 
                     onChange={handleDeliveryMethodChange} 
                     />
                Part time
            </label>

        </>
    );

}

export default ChangeEventHandler;