import React from 'react';

interface IProps {
    receivedMessage: (msg: string) => void;
}

interface IState {
}

class ReceiveMessage extends React.Component<IProps, IState> {
    handleReceivedMessage() {
        const msg = "do something here";
        this.props.receivedMessage(msg);
    }

    render() {
        return (
            <div >
                <button onClick={() => this.handleReceivedMessage()}>ReceivedMessage</button>
                <button onClick={() => this.props.receivedMessage("direct message")}>ReceivedMessage</button>
            </div>
        );
    }
}

export default ReceiveMessage;
