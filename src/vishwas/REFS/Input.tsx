import React, { Component } from 'react';

export default class Input extends Component<{}, {}> {
    inputRef: React.RefObject<any>;
    constructor(props: any) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    childFocusInput() {
        this.inputRef.current.focus();
    }

    // your own inputRef
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        );
    }
}

