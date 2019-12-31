import React, { Component } from 'react';
import mystyle from './mystyle.module.css';

export default class MyStyling extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const objectStyling = {
            color: "blue",
            fontSize: "24px"
        }
        return (
            <div>
                <p style={objectStyling}>Object Styling</p>
                <p className={mystyle.success}>Object Styling</p>
            </div>
        );
    }
}