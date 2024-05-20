function List(){


    //represent objects

    const food = [
        {
          name: "Apple",
          type: "Fruit",
          color: "Red",
          price: 1.99,
          isOrganic: true
        },
        {
          name: "Broccoli",
          type: "Vegetable",
          color: "Green",
          price: 2.49,
          isOrganic: false
        },
        {
          name: "Salmon",
          type: "Seafood",
          color: "Pink",
          price: 9.99,
          isOrganic: false,
          isWildCaught: true
        },
        {
          name: "Banana",
          type: "Fruit",
          color: "Yellow",
          price: 0.59,
          isOrganic: false
        },
        {
          name: "Carrot",
          type: "Vegetable",
          color: "Orange",
          price: 1.29,
          isOrganic: true
        },
        {
          name: "Chicken",
          type: "Meat",
          color: "White",
          price: 5.99,
          isOrganic: false,
          isFreeRange: true
        }
      ];

    const foodAsAList = food.map(food => food.price < 3 ? <li key={food.name}>{food.name + ": " + food.price} </li> : null);

    return(
        // <>
        // <ol>
        //     {animalsAsList}
        // </ol>
        //     {objectAnimalAsLists}
        // </>

        <ol>
            {foodAsAList}
        </ol>
    );
}

export default List;