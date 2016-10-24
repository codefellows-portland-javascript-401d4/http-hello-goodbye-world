const net = require('net');

let i = 1;

const server = net.createServer(client => {
  const name = 'client ' + (i++);
  console.log('client '+ name + ' connected.');

  //"client" is a duplex stream
  client.on('data', data =>{
    console.log('client says ' + data);
    //client.write('hello ' + name + '!\n');
    //template strings are an easier alternative to string concatenation
    client.write(`hello ${name}` + '\n');
  });
});





const port = 65000;
server.listen(port, err => {
  console.log('server listening on port', port, err);
});