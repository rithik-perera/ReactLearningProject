import React, {useState} from "react";

function ColorPicker(){

    [color, setColor] = useState('#fffff');

    const handleColorChange = (event)=>{
            setColor(event.target.value)
    }

    return(
        <>
       <div className="color-picker">
       <h2>Color Picker</h2>
            <input
                 type="color"
                 value={color}
                 onChange={handleColorChange}
                  />
       </div>
        </>
    );
}

export default ColorPicker;