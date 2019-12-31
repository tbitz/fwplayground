import React from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

interface IProps {
    products: any;
}
interface IState {
    searchText: string;
    onStock: boolean;
}

class Frame extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchText: "",
            onStock: false
        }
    }

    render() {
        return (
            <div>
                <Searchbar
                    searchText={this.state.searchText}
                    onStock={this.state.onStock}
                />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}

export default Frame;
