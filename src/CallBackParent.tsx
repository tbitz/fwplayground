import React from 'react';
import CallBackChild from './CallBackChild';
import { stringify } from 'querystring';
import CallBackChildNoState from './CallBackChildNoState';

interface IProps {
}

interface IState {
    count: number
}

class CallBackParent extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
    }

    useParentFunction(count: number): number {
        count = count + 2;
        count = count * 3 * 4 / 5;
        return count;
    }

    stateHandler(count: number) {
        this.setState({ count })
    }

    render() {
        return (
            <div>
                Parent Count: {this.state.count}
                <CallBackChild count={this.state.count} increaseCount={
                    (count) => this.setState({ count })} />

                <CallBackChildNoState handler={this.stateHandler.bind(this)} useMe={this.useParentFunction} />
            </div>
        );
    }
}

export default CallBackParent;
