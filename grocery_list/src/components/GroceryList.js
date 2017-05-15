import React from 'react'

function makeGroceryItems(items){ 
    return items.map((item) => {
        return (
            <li>
                <p>{item.name}: {item.category}: <span>{item.purchased ? "Purchased!" : "Not Purchased!"}</span></p>
            </li>
        );
    });
}


const GroceryList = ({
    items
}) => {

    let groceryItems = makeGroceryItems(items);
    return (
        <ul>
            {groceryItems}
        </ul>
    );
};

export default GroceryList;
