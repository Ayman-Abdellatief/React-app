import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCart from './shoppingCart';

class App extends Component {
    state = { 
        products:[
                 {id:1,name:'Burger',count:2},
                 {id:2,name:'Frise',count:0},
                 {id:3,name:'Cola',count:3}
        ]
        
             };
        
             handleDeltet = (product) => {
                //clone  
                //Edit
             const products =   this.state.products.filter((p) => p.id !== product.id)
                //Set state
                this.setState({products })
             };
        
             handleReset = () =>{
                //clone  
                   let  products = [...this.state.products];
                 //Edit
                products = products.map(p =>{
                     p.count = 0;
                     return p;
                 });
        
                 //Set State
                 this.setState({products});
             }
            
             
             handleIncrement =product =>{
                 //clone
                 const products = [...this.state.products];
                 const index =  products.indexOf(product);
                 products[index] = {...products[index]};
                 //Edit
                 products[index].count++;
                 // set State
                 this.setState({products});
            }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar productsCount = {this.state.products.filter(p => p.count>0).length}/>
                <main className="container">
                    <ShoppingCart products={this.state.products}
                    onIncrement={this.handleIncrement}
                    onDelete ={this.handleDeltet}
                    onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;