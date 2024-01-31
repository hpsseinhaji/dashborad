import React, { Component } from 'react';
import Product from './Product';
class Products  extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Product productName='Laptop'/>
            <Product productName='pc'/>
            <Product productName='Keyboard'/>
            </>
        );
    }
}
 
export default Products;