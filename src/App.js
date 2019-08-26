import React,  { Component } from 'react';

class App extends Component {
  constructor() {
  super();

  this.state = {
    monster: []
   };
  }

  componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({ monster: users }));
  }

render() {
  return (
    <div className="App">
      {this.state.monster.map(monster => (
      <h1> {monster.name} </h1> ))}
  </div> 
  ); 
 }
}
export default App;
