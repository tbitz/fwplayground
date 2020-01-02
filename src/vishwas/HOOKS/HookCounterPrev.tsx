import React, { useState } from 'react';

export function HookCounterPrev() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({ firstName: "", lastName: "" });

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    const incrementFiveWrong = () => {
        for (let index = 0; index < 5; index++) {
            setCount(count + 1);
        }
    }

    return (
        <div>
            <p>{name.firstName} {name.lastName} counted value: {count}</p>
            <label>Firstname</label>
            <input type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })} />
            <br></br>
            <label>Lastname</label>
            <input type="text"
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h4>Your name is {name.firstName} {name.lastName}</h4>

            {/* PREV PROPS */}
            <button onClick={() => setCount(count + 1)}>incrementOne</button>
            <button onClick={() => incrementFive()}>incrementFiveSafe</button>
            <button onClick={() => incrementFiveWrong()}>incrementFiveWrong</button>

        </div >
    );
}