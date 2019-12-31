import React from 'react';

interface IProps {
    searchText: string;
    onStock: boolean;
}
class Searchbar extends React.Component<IProps, {}> {
    render() {
        return (
            <div>
                <input type="text" />
                <input type="checked" />
            </div>
        );
    }
}

export default Searchbar;
