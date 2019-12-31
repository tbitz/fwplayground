import React, { PureComponent } from 'react';

// PURE COMPONENTS DO NOT UPDATE ON SAME VALUE
// IT'S PURE and not updated
// implements a shouldComponentUpdate Method with shallow props and state comparison
// shallow comparison Primitive Types"Vishwas" === "Vishwas" return true, same value same type = true
// shallow comparison Complex Types: Array&Objects if they point to the same object a = [1,2,3], b=[1,2,3]and const c = a; SC c === a true. SC a === b not true

// only rerender if props !== state
export default class Pure extends PureComponent<{ name: string }, {}> {
    render() {
        console.log("PURE COMP");
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        );
    }
}