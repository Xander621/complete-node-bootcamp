const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// Observer 1
myEmitter.on('newSale', () => {
  console.log('There was a new sale!');
});

// Observer 2
myEmitter.on('newSale', () => {
  console.log('Customer name: Jonas');
});

// Observer 3
myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit('newSale', 9);

//******************************************************* */
const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received.');
  res.end('Request received');
});

server.on('request', (req, res) => {
  console.log('Another request');
});

server.on('close', (req, res) => {
  res.end('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for requrestes...');
});
