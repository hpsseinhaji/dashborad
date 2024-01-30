import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class  Products extends Component {
    state = {
        count:1
      } 
    render() { 
        return (
            <>
            <span className='m-2 '>productName</span>
            <span  className='m-2 bg-primary rounded badge'>{this.state.count}</span>
            <button className='m-2 bg-success rounded' onClick={this.handlerIncrement}>+</button>
            <button className='m-2 bg-warning rounded'>-</button>
            <button className='m-2 bg-danger rounded'>Delete</button>
            </>
        );
    }
    // format(){


    // }
    handlerIncrement=()=>{
        this.setState({count:this.state.count+1});
        
    }
}

 
export default  Products;