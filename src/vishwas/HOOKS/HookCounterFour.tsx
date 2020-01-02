import React, { useState, useEffect } from 'react';

interface Items {
    id: number,
    value: number
}

// USE STATE WITH PREDEFINED ARRAY OF SPECIFIC OBJECTS
export default function HookCounterFour() {
    const [items, setItems] = useState<Array<Items>>([]);

    const addItem = () => {
        const mys = [...items];
        debugger;
        // APPEND ITEMS
        setItems([...items, { //makes a copy of using the spread operator
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])

        // PREPEND ITEMS
        setItems([{ //makes a copy of the array using the spread operator
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }, ...items])

        console.log([...items]); // that state isn't correct at that time
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        </div>
    );
}