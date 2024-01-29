import React, { Component } from 'react'
const list=['item1', 'item2', 'item3'];
const mappedList=list.map((item,index)=><li key={index}>{item}</li>);
class Product extends Component {
     count=1;
    state = {  } 
    render() { 
        return (
            <>
            {this.count!==0 ?(
            <>
             <span className='m-2 text-info'>product name</span>
                <span className='m-2 badge bg-primary'> {this.count===0 ? 'zero':this.count} </span>
                    <button className='m-2 btn btn-sm btn-success'>+ </button>
                    <button className='m-2 btn btn-sm btn-warning'>-</button>
                    <button className='m-2 btn btn-sm btn-danger' >delete</button>
                    <ul>{mappedList}</ul>
            </>):<h1>there is no Product </h1>}
               
            
            </>
        );
    }
    format  () {
        if (this.count=== 0){
            return 'zero';
        }else{
            return this.count;
        }
        
    }
}
 
export default Product;