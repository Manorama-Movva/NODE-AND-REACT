import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button'
import Counter from './counter'
import TextBox from './TextBox';


/*class App extends Component {
  constructor(){
    super();
    this.state={count:100}
  }
  IncrementhandleClick=()=>{
   console.log("clicked");
   this.setState({count: this.state.count+1})
 }
 DecrementhandleClick=()=>{
  console.log("clicked");
  this.setState({count: this.state.count-1})
}
 render(){

 
  return (
    <div className="App">
      <Counter count={this.state.count}/>
     <Button clickButton = {this.IncrementhandleClick}/>
     <Button clickButton = {this.DecrementhandleClick}/>
     <TextBox />
    </div>
  );
}
}

export default App;*/

const ThemeContext = React.createContext('light');

class App extends Component {
  constructor(){
    super();
    this.state={
      details:{
        color:"black"
      }
    }
  }
  render(){

  
  return (
    <ThemeContext.Provider value={this.state.details}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
class ThemedButton extends Component {
  static contextType =ThemeContext; 
  render(){
    return <button >{this.context.color}
    </button>;
  }
}
export default App;

