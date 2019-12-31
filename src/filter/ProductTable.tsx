import React from 'react';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';
var _ = require('lodash');

interface IProps {
    products: any;
}
class ProductTable extends React.Component<IProps, {}> {
    render() {
        const rows: any = [];
        let hasCategory: any = null;
        _.forEach(this.props.products, (product: any, index: any) => {
            if (product.category !== hasCategory) {
                rows.push(<ProductCategory key={index} category={product.category} />)
            }
            rows.push(<ProductRow key={index + 100} product={product} />)
            console.log(product.category);
            hasCategory = product.category;
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;
