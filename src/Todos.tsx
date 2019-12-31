import React, { EventHandler } from 'react';
var _ = require('lodash');

interface ITodoProps {
}
interface ITodoState {
    text: string,
    items: any
}

class Todos extends React.Component<ITodoProps, ITodoState> {
    constructor(props: any) {
        super(props);
        this.state = {
            text: "",
            items: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmitBefore = this.handleSubmitBefore.bind(this)

    }
    handleSubmit(e: any) {
        e.preventDefault();
        if (this.state.text) {
            this.setState(state => {
                const items = state.items.concat(state.text);
                console.log(items)
                return {
                    items,
                    text: ''
                }
            })
        }
    }

    handleSubmitBefore(e: any) {
        e.preventDefault();
        if (this.state.text) {
            this.setState(state => {
                const items = [state.text, ...state.items];
                console.log(items);
                return {
                    items,
                    text: ''
                }
            })
        }
    }


    handleChange(e: any) {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>TODO</h1>
                <TodoList items={this.state.items} />

                <form onSubmit={this.handleSubmit}>
                    <label>What needs to be done?</label>
                    <input type="text" onChange={this.handleChange} value={this.state.text} />
                    <button>Add #{this.state.items.length}</button>
                </form>

                <form onSubmit={this.handleSubmitBefore}>
                    <label>Submitbefore?</label>
                    <input type="text" onChange={this.handleChange} value={this.state.text} />
                    <button>Add before#{this.state.items.length}</button>
                </form>

            </div>
        );
    }
}

interface ITodoListProps {
    items: []
}
interface ITodoListState {
}
class TodoList extends React.Component<ITodoListProps, ITodoListState> {
    render() {
        return (
            <ul>
                {_.map(this.props.items, (item: any) => <li key={item}>{item}</li>)}
            </ul>
        );
    }
}

export default Todos;
