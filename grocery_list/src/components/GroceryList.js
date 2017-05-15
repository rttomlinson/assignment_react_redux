import React from 'react'


const GroceryList = ({items}) => {
    
    const groceryItems = items.map((item) => {
        console.log("item value", item);
        return (
            <li>
                <p>{item.name}: {item.category}: <span>{item.purchased ? "Purchased!" : "Not Purchased!"}</span></p>
            </li>
        );
    });
    
    
    return (
        <ul>
            {groceryItems}
        </ul>
    );
};

export default GroceryList;