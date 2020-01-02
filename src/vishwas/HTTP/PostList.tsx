import React from 'react';
import { runInThisContext } from 'vm';
import { log } from 'util';
import mystyle from '../STYLING/mystyle.module.css';
const axios = require('axios');
var _ = require('lodash');

interface IProps {

}
interface IState {
    posts: Array<any>;
    errorMessage: string;

}
export default class PostList extends React.Component<IProps, IState> {
    private randomArray = [1, 2, 3, 4, 5];
    constructor(props: any) {
        super(props);
        this.state = {
            posts: [],
            errorMessage: ""
        }
        this.lodashMe = this.lodashMe.bind(this)
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

    lodashMe() {
        console.log("LODASH");
        const { posts } = this.state;
        console.log(_.compact([0, 1, false, 2, '', 3])); // removes falsy values
        console.log(_.concat(posts, this.randomArray)); // removes falsy values
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
                <button onClick={this.lodashMe}>Lodash Me</button>
            </div>
        );
    }
}