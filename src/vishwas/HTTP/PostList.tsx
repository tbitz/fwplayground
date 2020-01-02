import React from 'react';
import { runInThisContext } from 'vm';
import { log } from 'util';
import mystyle from '../STYLING/mystyle.module.css';
const axios = require('axios');

interface IProps {

}
interface IState {
    posts: Array<any>;
    errorMessage: string;

}
export default class PostList extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: [],
            errorMessage: ""
        }
    }

    // called first
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then((response: { data: any; }) => {
                this.setState({ posts: response.data })
            })
            .catch((error: any) => {
                this.setState({ errorMessage: "Error retreiving data" })
            })
    }


    render() {
        const { posts, errorMessage } = this.state;
        return (
            <div>
                List of posts
                {
                    posts.length ?
                        posts.map(post => <div className={mystyle.jsonlist} key={post.id}>{post.title}</div>)
                        : null
                }
                {errorMessage ? <div>{errorMessage}</div> : null}
            </div>
        );
    }
}