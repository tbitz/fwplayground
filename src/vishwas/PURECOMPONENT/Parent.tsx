import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Regular from './Regular';
import Pure from './Pure';
import MemoComp from './MemoComp';

// if parent is pure children should also be pure
// don't mutate state, return new object that reflects the state
export default class Parent extends Component<{}, { name: string }> {
    //export default class Parent extends PureComponent<{}, { name: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "Vishwas"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Vishwas"
            })
        }, 2000)
    }


    render() {
        console.log("PARENT COMP");

        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                <Regular name={this.state.name} />
                <Pure name={this.state.name} />
            </div>
        );
    }
}