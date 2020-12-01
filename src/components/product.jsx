import React, { Component } from 'react';
class Product extends Component {
    // state = {  
    //    // name:['ahmed','yasser','Arwa'],
    //    name: this.props.product.name,
    //     count:this.props.product.count
    // }
   getclasses(){
     return   this.props.product.count === 0
       ?"badge badge-warning m-2"
       :"badge badge-primary m-2"
   }
    renderNames(){
        if(this.props.product.name.length === 0)
        {
            return <h2>No names</h2>;
        }
       
           return( <ul>
            {this.props.product.name.map(name => (<li key={name}>{name}</li>))}
        </ul>
        );
        
    }

  

    // Increment = () => {
    //     this.IncrementHandler(2);
    // };
    render() { 

        return (
             <div className='row'>
       <div className="col-1">
        <span>{this.props.product.name}</span>

       </div>
       <div className="col">
       <span className={this.getclasses()}>{this.props.product.count}</span>
        <button onClick={() =>this.props.onIncrement(this.props.product)} className="btn btn-primary btn-sm">
            +</button>
            <span onClick={() =>this.props.onDelete(this.props.product)}>
            <i className="fas fa-trash m-2"></i>
            </span>
       </div>
       
        </div>);
    }
}
 
export default Product;