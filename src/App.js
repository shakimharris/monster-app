import React,  { Component } from 'react';
import { CardList } from './components/cardlist/card-list.component';

class App extends Component {
  constructor() {
  super();

  this.state = {
    monster: [],
    searchField: ''
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
      <input type="search" placeholder="Search" onChange={e => console.log(e.target.value)} />
      <CardList monster={this.state.monster}>
      </CardList>
  </div> 
  ); 
 }
}
export default App;
