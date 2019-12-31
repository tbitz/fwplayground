import React, { EventHandler } from 'react';
var _ = require('lodash');

interface IP {
}
interface IS {
    obj: more,
    items: any
}
interface more {
    id: number,
    text: string
}

class TodoObjects extends React.Component<IP, IS> {
    constructor(props: any) {
        super(props);
        this.state = {
            obj: {
                id: 0,
                text: ""
            },
            items: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    handleSubmit(e: any) {
        e.preventDefault();
        document.getElementById("input");

        if (this.state.obj.text) {
            console.log(this.state.obj)
            this.setState({
                obj: {
                    id: this.state.obj.id + 1,
                    text: this.state.obj.text
                }
            });
            this.setState(state => {
                const items = state.items.concat(state.obj);
                return {
                    items,
                    obj: {
                        id: this.state.obj.id + 1,
                        text: ''
                    }
                }
            })
        }
    }

    handleInputChange(e: any) {
        this.setState({
            obj: {
                id: this.state.obj.id,
                text: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <h1>TodoObjects</h1>
                <TodoObjectsList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input id="input" type="text" onChange={this.handleInputChange} value={this.state.obj.text} />
                    <button>Create Object</button>
                </form>
                <hr></hr>
            </div>
        );
    }
}

interface ITodoObjectsListProps {
    items: []
}
interface ITodoObjectsListState {
}
class TodoObjectsList extends React.Component<ITodoObjectsListProps, ITodoObjectsListState> {
    render() {
        return (
            <ul>
                {_.map(this.props.items, (item: any) => <li key={item.id}>{item.text}</li>)}
            </ul>
        );
    }
}

export default TodoObjects;
