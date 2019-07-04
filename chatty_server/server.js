// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidV1 = require('uuid/v1');// To generate a UUID v1 time-based

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // update the connected number of users (usersCount)
  // send wss.clients.size to get the number of users connected
  wss.clients.forEach(function each(client) {
    client.send(wss.clients.size);
  });

  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(data));
      console.log('Message sent to client from server is: ', data);
    });
  };

  ws.on('message', (incomingData) => {
    //console.log('incoming message is:', incomingMessage);
    const parsedMessage = JSON.parse(incomingData);
    //console.log('parsedMessage is', parsedMessage);
    parsedMessage.message.id = uuidV1();
    //console.log('parsedMessage is', parsedMessage.message);
    switch (parsedMessage.message.type) {
      case 'postMessage': parsedMessage.message.type = 'incomingMessage';
        break;
      case 'postNotification': parsedMessage.message.type = 'incomingNotification';
        break;
    }
    
    console.log(`User ${parsedMessage.message.username} said ${parsedMessage.message.content}`);
    //let stringifiedMessage = JSON.stringify(parsedMessage);
    wss.broadcast(parsedMessage);
  });

   // Set up a callback for when a client closes the socket. This usually means they closed their browser.
   ws.on('close', () => {
    console.log('Client disconnected');
  // update the connected number of users (usersCount)
  // send wss.clients.size to get the number of users connected
    wss.clients.forEach(function each(client) {
      client.send(wss.clients.size);
    });
  });
});
  
  