
import React from 'react';
import FnReceiver from './FnReceiver';
import ReceiveMessage from './ReceiveMessage';

interface IProps {
}

interface IState {
    justClicked: any,
    letters: any
}

const A = 65;

class FnPasser extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.pass = this.pass.bind(this);
        this.passText = this.passText.bind(this);
        this.state = {
            justClicked: null,
            letters: Array.from({ length: 26 }, (_, i) => String.fromCharCode(A + i))
        };
    }

    pass() {
        console.log("handle Click");
    }

    passText(msg: string) {
        console.log(msg)
    }

    bindInRender() {
        console.log("bind in render")
    }

    passArrowFn = () => { console.log("Arrow Function") }
    passId = (id: number) => { console.log(id) }

    handleClick(letter: any) {
        this.setState({ justClicked: letter });
    }

    //passDown = () => { console.log("Clicked in FnPasser") }

    // setting the message in the child
    // passing the function as is
    passDownParam = (msg: string) => { console.log(msg) }

    // don't use arrow functions and bind in render fn
    render() {
        return (
            <div>
                {/* set message in child */}
                <ReceiveMessage receivedMessage={this.passDownParam} />


                {/* void */}
                {/* <FnReceiver receiveVoid={this.passDown} /> */}

                {/* preset message */}
                {/* <FnReceiver receiveVoid={() => this.passDownParam("the message")} /> */}


                {/* 
                <button onClick={this.pass}>Pass void</button>
                <button onClick={() => this.passText("Passed Parameter")}>Pass Param</button>
                <button onClick={this.passArrowFn}>ArrowFn</button>
                <button onClick={this.bindInRender.bind(this)}>bindInRender</button>
                <button onClick={() => this.passId(5)}>id Pass</button>

                <div>Just clicked {this.state.justClicked} </div>
                <ul>
                    {this.state.letters.map((letter: any) =>
                        <li key={letter} onClick={() => this.handleClick(letter)}>
                            {letter}
                        </li>
                    )}
                </ul> */}
            </div>
        );
    }
}

export default FnPasser;
