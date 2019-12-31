import React, { Component } from 'react';
import Input from './Input';

export default class FocusInput extends Component<{}, {}> {
    componentRef: React.RefObject<any>;
    constructor(props: any) {
        super(props);

        this.componentRef = React.createRef();
    }

    // parent using child function to focus on click
    clickHandler = () => {
        this.componentRef.current.childFocusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

