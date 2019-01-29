import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    return (
      <div id="authorization">
        <h1>Contact</h1>
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            333.444.5555
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
