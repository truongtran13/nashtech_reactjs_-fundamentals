import React, { Component } from 'react';
import './App.css';
import { UserProfile } from './components/userProfile';
import { Counter } from './components/counter';

class App extends Component{
  state = {
    users: [
      {
        userName: 'Thor',
        avatar: 'https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/8278964f71bf44b8a3a9896d8557d6dc_Large.png'
      },
      {
        userName: 'Superman',
        avatar: 'https://www.stuffedwithplushtoys.com/assets/alt_1/DC9001.jpg?20190612121750'
      }
    ]
  }

  render() {
    const {users} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Awesome App</h1>
        </header>
        {users.map(user => <UserProfile key={user.userName} userName={user.userName} avatar={user.avatar}/>)}
        <Counter/>
      </div>
    );
  }
}

export default App;
