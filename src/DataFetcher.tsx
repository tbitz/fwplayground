import React from 'react';
var _ = require('lodash');

interface IState {
    data: any
}
interface IProps {

}

const numbers = [100, 4, 5, 7, 8, 2, 123123, 5566, 7, 1, 2, 3, 4, 5, 6]

const users = [
    { 'id': 1, 'user': 'barney', 'age': 36, 'active': true },
    { 'id': 2, 'user': 'fred', 'age': 40, 'active': true },
    { 'id': 3, 'user': 'thierry', 'age': 31, 'active': true },
    { 'id': 4, 'user': 'loro', 'age': 33, 'active': true },
    { 'id': 5, 'user': 'vivi', 'age': 64, 'active': false },
    { 'id': 6, 'user': 'hubi', 'age': 65, 'active': false }
];

class DataFetcher extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        console.log("will mount")
        this.fetchData();
        this.getData();
    }

    fetchData() {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
            });
    }

    getData() {
        /* 
                var xhr = new XMLHttpRequest()
        
                xhr.addEventListener('load', () => {
                    console.log(xhr.responseText)
                })
                xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')
                xhr.send() */
    }

    lodashArrays() {
        let message = this.state.data.message;
        let noEmpties = _.filter(message, (m: any) => m.length > 0);
        let noEnglish = _.filter(noEmpties, (d: any) => _.includes(d, "english"));
        let noEnglishnoBlood = _.filter(noEnglish, (d: any) => _.without(d, "blood"))
        console.log(noEnglishnoBlood);

        // return all numbers bigger than
        let nums = _.filter(numbers, (n: number) => (n >= 100));
        console.log(_.without(nums, 100))
        console.log(nums)

        // return numbers modulo 2 and sort, throw out multiples
        let nums2 = _.filter(numbers, (n: number) => (n % 2 === 0));
        nums2 = _.uniq(nums2);
        nums2 = _.orderBy(nums2);
        nums2 = _.sortBy(nums2, [(v: number) => v < 1000])
        console.log(nums2)
        console.log("Not in second: " + _.difference(nums, nums2));
        console.log("I have and other hasn't: " + _.difference(nums2, nums));
    }

    lodashObjects() {

    }

    render() {
        return (
            <div>
                <button onClick={() => this.lodashArrays()}>Arrays</button>
                <button onClick={() => this.lodashObjects()}>Objects</button>
            </div>
        );
    }
}

export default DataFetcher;
