const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let tokenFactory;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  tokenFactory = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '5000000' });
});

describe('Lottery Contract', () => {
  it('deploys a contract', () => {
    assert.ok(tokenFactory.options.address);
  });

  it('allows one account to enter', async () => {
    const address = await tokenFactory.methods.createEIP20(10, 'FUCK', 1, 'YOU').send({
      from: accounts[0],
      gas: '2000000'
    });
    console.log(address.events[0].address);
    console.log(address);
    assert.ok(address);
  });
});
