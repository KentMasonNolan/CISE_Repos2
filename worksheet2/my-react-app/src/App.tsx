import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  count: number;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  makeIncrementer = (amount: number) => () =>
    this.setState((prevState: State) => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Count: {this.state.count}</p>
          <button className="increment" onClick={this.increment}>
            Increment count
          </button>
        </header>
      </div>
    );
  }
}

export default App;
