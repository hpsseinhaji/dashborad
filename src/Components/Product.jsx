import React, { Component } from 'react'
const list=['item1', 'item2', 'item3'];
const mappedList=list.map((item,index)=><li key={index}>{item}</li>);
class Product extends Component {
    state = { 

        count:0,
        ProductName:'laptop'
     } 
    render() { 
        return (
            <>
            {/* {this.count!==0 ?(
            <> */}
             <span className='m-2 text-info'>{this.state.ProductName}</span>
                <span className='m-2 badge bg-primary'> {this.format()} </span>
                    <button className='m-2 btn btn-sm btn-success' onClick={this.handleIncreamen}>+ </button>
                    <button className='m-2 btn btn-sm btn-warning' onClick={this.handleDecrement}>-</button>
                    <button className='m-2 btn btn-sm btn-danger' >delete</button>
                    <ul>{mappedList}</ul>
            {/* </>):<h1>there is no Product </h1>} */}
               
            
            </>
        );
    }
    format  () {
        if (this.state.count=== 0){
            return 'zero';
        }else{
            return this.state.count;
        }
        
    }
    handleIncreamen=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
}
 
export default Product;