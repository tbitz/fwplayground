import * as React from 'react';
var _ = require('lodash');

export class Fragments extends React.Component<{}, {}>{
    render() {
        const items: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
        return (
            <>
                <p>We are all in keyed Fragments</p>
                {
                    items.map(item => (
                        <React.Fragment key={item.id}>
                            <p>ID: {item.id}</p>
                        </React.Fragment>
                    ))
                }
            </>
        );
    };
};