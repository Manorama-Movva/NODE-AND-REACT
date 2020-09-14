import React, { Component } from 'react';
import Header from './components/Header'
import {LoginComponent} from './components/Login';
import ProductList from './components/ProductList';

import {Register} from './components/Register';

//this is called pure component or stateless component
export class App extends Component{
    constructor(){
        super();
        this.state={
            companyName:"",
            cartCount:0
        }
    }
    handleClick=(data)=>{
        console.log(data);
        this.setState({cartCount:this.state.cartCount+1})
    }
    render(){
    return <div>
        <Header title={this.state.companyName} cartCount={this.state.cartCount}/>
        {/*ProductList*/}
        <ProductList handleClick={this.handleClick}/>
        
        </div>; 
    }
};
export default App;

