import React from 'react';

interface IProps {
    receiveVoid: () => void;
}

interface IState {
}

class FnReceiver extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

    }

    render() {
        if (this.props.receiveVoid) {
            this.props.receiveVoid();
            console.log(this.props.receiveVoid());
            console.log(() => this.props.receiveVoid());
            return (
                <div >
                    <button onClick={this.props.receiveVoid}>receiveVoid</button>
                    FnReceiver
                </div>
            );
        }

    }
}

export default FnReceiver;
