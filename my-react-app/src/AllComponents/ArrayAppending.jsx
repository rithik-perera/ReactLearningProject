import React, { useState } from "react";

function ArrayAppending() {
    const [food, setFood] = useState([]);
    

  
    const foodList = food.map((item, index) => <li key={index} onClick={() => {handleRemoveItem(index)}}>{item}</li>); 


    const handleFoodChange = () => {
        let newFood = document.getElementById('writtenFood').value
        setFood(
            prevFood => [...prevFood, newFood]
        );
        document.getElementById('writtenFood').value = '';
    }

    const handleRemoveItem = (index) => {
        console.log('the index is: ' + index);
        setFood(
            prevFood => prevFood.filter((_, i) => i != index)
        );
    }



    return (
        <>
            <h2>List of Food</h2>
            <ul>
                {foodList}
            </ul>
            <input 
                type="text"
                id="writtenFood"
                placeholder="add your food"
            />
            <button onClick={handleFoodChange}>Add Food</button> 

            <div className="container">

            </div>
        </>
    );
}

export default ArrayAppending;
