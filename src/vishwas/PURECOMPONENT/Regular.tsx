import React, { Component } from 'react';

export default class Regular extends Component<{ name: string }, {}> {
    render() {
        console.log("REG COMP");
        return (
            <div>
                Regular component {this.props.name}
            </div>
        );
    }
}

