import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCart from './shoppingCart';
import {Route , Switch ,Redirect} from  'react-router-dom';
import ProductDetails from './productDetails';
import NotFound from './notFound';
import Menu from './menu';
import Login from './login';

class App extends Component {
    state = { 
        products:[
                 {id:1,name:'Burger',price:30,
                 count:0,isInCart:false},
                 {id:2,name:'Frise',price:20,
                 count:0,isInCart:false},
                 {id:3,name:'Cola',price:10,
                 count:0,isInCart:false}
        ]
        
             };
        
             handleInCartChange = product =>{
                 //clone
                 const products = [...this.state.products];
                 const index = products.indexOf(product);
                 products[index] ={...products[index]};
                 //Edit
                 products[index].isInCart = !products[index].isInCart;
                 // Set Satate
                 this.setState({products});
                     

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
                    <Switch>       
                     <Route path='/products/:id/:name?' render={(props) => 
                        <ProductDetails products={this.state.products}
                        {...props}/>}/>              
                    <Route path='/cart' render= {(props) => 
                    <ShoppingCart 
                    products={this.state.products.filter((p)=> p.isInCart)}
                    onIncrement={this.handleIncrement}
                    onDelete ={this.handleInCartChange}
                    onReset={this.handleReset} 
                    {...props}
                    />
                    }
                    />
                    <Route path='/login' component={Login}/>
                   
                    <Route path='/notFound' component={NotFound}/>
                    <Route path='/menu' render={(props) =>
                    <Menu 
                      {...props}
                      products={this.state.products}
                      onClick ={this.handleInCartChange}
                    />
                    }/>
                                      
                    <Redirect from='/' to='/home'/>
                    <Redirect to='/notFound'/>
                    </Switch>

                    {/* <ShoppingCart products={this.state.products}
                    onIncrement={this.handleIncrement}
                    onDelete ={this.handleDeltet}
                    onReset={this.handleReset}
                    /> */}
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;