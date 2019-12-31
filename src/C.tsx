import React from 'react';
import { MyContext, IColors, SecondContext } from './MyProvider';

interface IProps {
    counter: number
    title: string;
}

interface IState {
    color: IColors
}

class C extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = { color: IColors.green };
    }

    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <div>
                            {console.log(context)}
                            <p>I'm inside the consumer {context.myObj.color}</p>
                            <span style={{ color: context.myObj.color }}>{this.props.title} - {this.props.counter} </span>
                        </div>
                    )}
                </MyContext.Consumer>
                <SecondContext.Consumer>
                    {(context) => (
                        <div>
                            <p>I'm coming from SecondContext {context}</p>
                        </div>
                    )}
                </SecondContext.Consumer>
            </div >
        );
    }
}

export default C;
