import * as React from 'react';
var _ = require('lodash');

export class Lodash extends React.Component<{}, {}>{
    createSayings() {
        let sayings = new Map<string, string>();
        sayings.set('dog', 'woof');
        sayings.set('cat', 'meow');
        sayings.set('elephant', 'toot');
        console.log(sayings.size); // 3
        sayings.get('fox'); // undefined
        sayings.has('bird'); // false
        sayings.delete('dog');
        sayings.has('dog'); // false

        for (const [key, value] of sayings) {
            console.log(key + ' goes ' + value);
        }
    }

    render() {
        const complicatedArray: any[][] =
            [
                [
                    { id: 1, name: "meat", eatable: true },
                    { id: 2, name: "vegis", eatable: true },
                    { id: 3, name: "carbs", eatable: true }
                ],

                [
                    { id: "earth", name: "hello earth" },
                    { id: "mars", name: "hello mars" },
                    { id: "jupiter", name: "hello jupiter" }
                ]
                ,

                [
                    { id: 102, name: "Gandalf" },
                    { id: 123, name: "Super Mario" },
                    { id: 55, name: "Zubasa" }
                ]
            ];
        /*         console.log(_.includes([1, 2, 3], 1));
                console.log(_.includes([1, 2, 3], 1, 2));
                console.log(_.includes({ 'a': 1, 'b': 2 }, 1)); */

        // ARRAY OF OBJECTS: can only find values, not combos {id: "2"}
        console.log(_.includes({ id: 1, name: "meat" }, 1));
        console.log(_.includes({ id: "1", name: "meat" }, 1));

        const items: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

        const users = [
            { 'user': 'barney', 'age': 36, 'active': true },
            { 'user': 'fred', 'age': 40, 'active': false },
            { id: 1, 'age': 40, 'active': false },
            { id: 2, 'age': 55, 'active': true },
        ];
        console.log(_.filter(users, function (o: any) { return o.id; })); // get all that have id 
        console.log(_.filter(users, (o: any) => o.age < 40)); // get object by age
        console.log(_.filter(users, { 'age': 40 })); // get object by age property
        console.log(_.filter(users, { id: 1 })); // get object by property

        const simplifiedArray = _.filter(complicatedArray, (item: any) => item);
        console.log(simplifiedArray)
        console.log(_.flatMapDepth(items));



        let query = _.find(complicatedArray, (obj: any) => {
            return _.find(obj, (o: any) => {
                console.log(o.id);
                return o.id === 2
            });
        });
        query = _.includes(complicatedArray, { id: 1 });
        console.log("returned value: _____________")
        console.log(query);

        return null;
    }
}