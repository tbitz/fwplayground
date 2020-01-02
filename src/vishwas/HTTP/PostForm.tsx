import React from 'react';
const axios = require('axios');

interface IProps {

}
interface IState {
    userId: string,
    title: string,
    body: string
}
export default class PostForm extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userId: "",
            title: "",
            body: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeHandler = (e: { target: { name: any; value: any; }; }) => {
        const newState = { [e.target.name]: e.target.value } as Pick<IState, keyof IState>;
        console.log(newState)
        this.setState(newState);
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error))
        this.setState({
            userId: "",
            title: "",
            body: ""
        });
    }

    render() {
        const { userId, title, body } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                    <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}