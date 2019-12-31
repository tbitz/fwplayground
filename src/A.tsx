import React, { Component } from 'react';
import B from './B';
import { MyProvider, IColors } from './MyProvider';


interface IState {
    counter: number;
}

class A extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <MyProvider>
                <div>
                    <span style={{ color: IColors.red }}> I am A:_</span>
                    <button onClick={(e) => this.increment(5)}> Increment </button>
                    {this.state.counter}
                    <B counter={this.state.counter}>Render B</B>
                </div>
            </MyProvider>
        );
    }

    componentDidMount() {
        let value = this.context;
        this.setState({ counter: 5 })
    }

    componentDidUpdate() {
    }

    increment(n: number) {
        this.setState({ counter: this.state.counter + n })
    }

}

export default A;
