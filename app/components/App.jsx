import React from 'react';

const App = React.createClass({
// class App extends React.Component{
//when use above syntax, get error at L8,3
  getInitialState() {
    return { who: 'type something' };
  },

  handleChange(event) {
    const nextWho = event.target.value;

    this.setState({ who: nextWho });
  },

  render() {
    let message;

    if (this.state.who.trim() === '') {
      message = 'Hello?';
    }
    else {
      message = `Hello ${this.state.who}`;
    }

    return <div>
      <h1>{message}</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.who}
      />
    </div>;
  }
 // }
});

export default App;
