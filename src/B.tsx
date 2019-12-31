import React from 'react';
import C from './C';

interface IProps {
    counter: number
}

interface IState {
}

class B extends React.Component<IProps, IState> {
    render() {
        return (
            <div >
                {/* <div>I am B:_{this.props.counter}</div> */}
                <C title="C in B" counter={this.props.counter} />
            </div>
        );
    }
}

export default B;
