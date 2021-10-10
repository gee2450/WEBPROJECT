import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };

  onIncrease = () => {
    this.setState({
      counter: this.state.counter+1
    });
  };
    
  onDecrease = () => {
    this.setState({
      counter: this.state.counter-1
    });
  };
    
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.onIncrease}>+1</button>
        <button onClick={this.onDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;