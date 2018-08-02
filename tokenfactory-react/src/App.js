import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import tokenFactory from './lottery';

class App extends Component {
  state = {
    contracts: [],
    name: '',
    symbol: '',
    supply: '',
    decimals: '',
    address: ''
  };

  async componentDidMount() {
    //const players = await tokenFactory.methods.getPlayers().call();
    const contracts = 'TEST';

    this.setState({ contracts });
  }

  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });
    //this.state.supply * 10 ** this.state.decimals
    const address = await tokenFactory.methods.createEIP20(this.state.supply, this.state.name, this.state.decimals, this.state.symbol).send({
      from: accounts[0],
      gas: '2000000'
    });

    this.setState({ message: 'Created coin at: ' + address.events[0].address + ' with TX# ' + address.transactionHash});
  };

  render() {
    return (
      <div>
        <h2>Token Factory</h2>
        <p>
          This contract is a test.
        </p>
        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Create a new token?</h4>
          <div>
            <label>Name: </label>
            <input
              name={this.state.value}
              onChange={event => this.setState({ name: event.target.value })}
            />
            <label>Symbol: </label>
            <input
              symbol={this.state.value}
              onChange={event => this.setState({ symbol: event.target.value })}
            />
            <label>Supply: </label>
            <input
              supply={this.state.value}
              onChange={event => this.setState({ supply: event.target.value })}
            />
            <label>Decimals: </label>
            <input
              decimals={this.state.value}
              onChange={event => this.setState({ decimals: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
