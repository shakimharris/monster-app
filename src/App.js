import React,  { Component } from 'react';

class App extends Component {
  constructor() {
  super();

  this.state = {
    monster: [
      {
        name: 'Frankenstein',
        id: 'shh92'
      },
      {
        name: 'Chucky',
        id: 'sha10'
      }, 
      {
        name: 'Count Olaf',
        id: 'sjj0'
      }

    ]
   };
  }
  componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => console.log(users))
  }

render() {
  return (
    <div className="App">
      {this.state.monster.map(monster => <h1>{monster.name}</h1>)}
    </div>
  );
 }
}
export default App;
