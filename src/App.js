import React,  { Component } from 'react';
import { CardList } from './components/cardlist/card-list.component';

class App extends Component {
  constructor() {
  super();

  this.state = {
    monsters: [],
    searchField: ''
   };
  }

  componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState({ monsters: users }));
  }

render() {
  const { monsters, searchField } = this.state;
  const filteredMonster = monsters.filter(monster => 
    monster.name.toLowerCase()).includes(searchField.toLowerCase()
  );

  return (
    <div className="App">
      <CardList monsters={filteredMonster}>
      </CardList>
  </div> 
  ); 
 }
}
export default App;
