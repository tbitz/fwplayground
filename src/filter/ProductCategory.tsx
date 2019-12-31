import React from 'react';

interface IProps {
    category: any;
}
class ProductCategory extends React.Component<IProps, {}> {
    render() {
        return (
            <tr>
                <th>{this.props.category}</th>
            </tr>
        );
    }
}

export default ProductCategory;
