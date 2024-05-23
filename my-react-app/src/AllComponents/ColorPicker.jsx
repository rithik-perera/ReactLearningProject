import React, {useState} from "react";

function ColorPicker(){

    const [color, setColor] = useState('#fffff');

    const handleColorChange = (event)=>{
            setColor(event.target.value)
    }

    return(
        <>
       <div className="color-picker">
       <h2>Color Picker: </h2>
       
       <>
            <div className="selected-color" style={{background: color}}>
                <p>selected Color: <span style={{fontWeight: "bold"}}>{color}</span></p>
            </div>
            
            <input
                 type="color"
                 value={color}
                 onChange={handleColorChange}
                  />

            
        </>


       </div>
        </>
    );
}

export default ColorPicker;