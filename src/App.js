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
  const { monster, searchField } = this.state;
  const filteredMonster = monster.filter(monster => 
    monster.name.toLowerCase()).includes(searchField.toLowerCase()
  )

  return (
    <div className="App">
      <input type="search" placeholder="Search" onChange={e => {
        this.setState({ searchField: e.target.value }, () =>
        console.log(this.state)
      );
      }} />
      <CardList monster={filteredMonster}>
      </CardList>
  </div> 
  ); 
 }
}
export default App;
