import React, {useState} from "react";

function ObjectsInUseState(){

  const  [animal, setAmimal] = useState(
        {
            name: "",
            species: "",
            dietaryClassification: ""   
        }

    );

    
    const handleAnimalNameChange = (event)=>{
        setAmimal(
            a => ({
                ...a,
                name: event.target.value
            })
        );
    }

    const handleAnimalTypeChange = (event) =>{
        setAmimal(
            a => ({
                ...a,
                species: event.target.value //over here it states that the event is deprected, please solve it
            })
        );
    }

    const handleAnimalDCChange = (event)=>{
        setAmimal(
            a => ({
                ...a, dietaryClassification: event.target.value
            })
        )
    }


    
    return(
        <div className="animal-classification">
            <p>The selected animal is a {animal.name} which belongs to the species {animal.species} and has the dietary classification: {animal.dietaryClassification}</p>
            <input
                type="text"
                placeholder="Name of your animal: " 
                onChange={handleAnimalNameChange}
             /> <br /><br />

            <input 
                type="text"
                placeholder="species of your animal: "
                onChange={handleAnimalTypeChange}
              /><br /><br />

            <input
                 type="text" 
                 placeholder="Dietary classification" 
                 onChange={handleAnimalDCChange}
                 />
        </div>
    );
}

export default ObjectsInUseState;