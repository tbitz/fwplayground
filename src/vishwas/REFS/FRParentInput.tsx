import React, { Component } from 'react';
import Input from './Input';
import FRInput from './FRInput';

export default class FRParentInput extends Component<{}, {}> {
    inputRef: React.RefObject<any>;
    constructor(props: any) {
        super(props);
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

