import React from 'react';

interface IProps {
    useMe: (count: number) => number;
    handler: (n: number) => void;
}

interface IState {
    //mycount: number
}

class CallBackChildNoState extends React.Component<IProps, IState> {
    doSomethingAndUpdateParentState() {
        let count = this.props.useMe(10);
        count = count + 55;
        this.props.handler(count);
        //this.setState({ mycount: count })

    }

    render() {
        return (
            <div>
                {/* MyCount: {this.state.mycount}; */}
                <button onClick={() => this.doSomethingAndUpdateParentState()}>Child uses Parent function and sets parents state</button>
            </div >
        );
    }
}

export default CallBackChildNoState;
