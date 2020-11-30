import React, { Component } from 'react';
class Product extends Component {
    state = {  
       // name:['ahmed','yasser','Arwa'],
       name:'Burger',
        count:5,
        imgUrl:'logo192.png'
    }
   getclasses(){
     return   this.state.count === 0
       ?"badge badge-warning m-2"
       :"badge badge-primary m-2"
   }
    renderNames(){
        if(this.state.name.length === 0)
        {
            return <h2>No names</h2>;
        }
       
           return( <ul>
            {this.state.name.map(name => (<li key={name}>{name}</li>))}
        </ul>
        );
        
    }

    IncrementHandler =num =>{
        this.setState({count :this.state.count +num})
    }

    // Increment = () => {
    //     this.IncrementHandler(2);
    // };
    render() { 

        return ( <div>
        {/* {this.state.name.length ===0 && <h4>No Names</h4>}

             <ul>
            {this.state.name.map(name => (<li key={name}>{name}</li>))}
        </ul> */}
        <span>{this.state.name}</span>
        <span className={this.getclasses()}>{this.state.count}</span>
        <button onClick={() =>this.IncrementHandler(2)} className="btn btn-primary btn-sm">+</button>
        </div>);
    }
}
 
export default Product;