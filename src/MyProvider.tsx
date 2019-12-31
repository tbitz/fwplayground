import React, { Component } from 'react';

export enum IColors {
    red = "#f00",
    green = "#0f0",
    blue = "#00f"
}

// CONTEXT taking the object
export const MyContext = React.createContext({ myObj: { title: "any", color: IColors.green } });
export const SecondContext = React.createContext("mystring");

// PROVIDER setting an object 
export class MyProvider extends Component {
    myObj = {
        title: "My Title",
        color: IColors.blue,
    }

    render() {
        return (
            <div>
                <MyContext.Provider value={{
                    myObj: this.myObj
                }}>
                    {console.log(this.props.children)}
                    {this.props.children}
                </MyContext.Provider>
                <SecondContext.Provider value="changestring">

                </SecondContext.Provider>
            </div>
        )
    }
}