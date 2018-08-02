const path = require('path');
const fs = require('fs');
const solc = require('solc');


const pathA = path.resolve(__dirname, 'contracts', 'EIP20Interface.sol');
const pathB = path.resolve(__dirname, 'contracts', 'EIP20.sol');
const pathC = path.resolve(__dirname, 'contracts', 'EIP20Factory.sol');
const solC = fs.readFileSync(pathC, 'utf8');

const input = {
  sources: {
    'C.sol': solC
  }
};
//console.log(solc.compile(input, 1).contracts['C.sol:EIP20Factory'].interface);
//console.log(solc.compile(input, 1).contracts['C.sol:EIP20Factory'].bytecode);
//console.log(solc.compile(input, 1));
module.exports = solc.compile(input, 1).contracts['C.sol:EIP20Factory'];




/*
const factoryPath = path.resolve(__dirname, 'contracts');
console.log(factoryPath);
console.log('test');
//const source = fs.readFileSync(factoryPath, 'utf8');

var input = {
    'EIP20Interface.sol': fs.readFileSync(factoryPath + '\/EIP20Interface.sol', 'utf8'),
    'EIP20.sol': fs.readFileSync(factoryPath + '\/EIP20.sol', 'utf8'),
    'EIP20Factory.sol': fs.readFileSync(factoryPath + '\/EIP20Factory.sol', 'utf8'),
};
let compiledContract = solc.compile({sources: input}, 1);
console.log(compiledContract.contracts['EIP20Factory.sol:EIP20Factory'].interface)
module.exports = solc.compile({sources: input}, 1).contracts['EIP20Factory.sol:EIP20Factory'];
*/
