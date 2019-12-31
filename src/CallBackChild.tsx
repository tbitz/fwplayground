import React from 'react';

interface IProps {
    count: number
    increaseCount: (count: number) => void;
}

interface IState {
}

class CallBackChild extends React.Component<IProps, IState> {
    increase(count: number) {
        this.props.increaseCount(count + 1);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.increase(this.props.count)}>+</button>
            </div>
        );
    }
}

export default CallBackChild;
