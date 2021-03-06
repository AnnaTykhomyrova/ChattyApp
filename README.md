Chatty App
=====================

Chatty App is a client-side single-page application that allows multiple users to chat with each other. The client-side app is built with ReactJS, and communicates with a server via WebSockets for multi-user real-time updates.

# Final Product
!["Screenshot of two users connected to app."](https://github.com/AnnaTykhomyrova/ChattyApp/blob/master/docs/Screenshot%20from%202019-07-05%2015-49-42.png)
!["Screenshot of each user can change name and can have random color of username."](https://github.com/AnnaTykhomyrova/ChattyApp/blob/master/docs/Screenshot%20from%202019-07-05%2015-54-06.png)

### Getting Started

Install the dependencies and start the server.
```
npm install
npm start
open http://localhost:3001
```

Clone the repo to your local machine.
```
git clone git@github.com:AnnaTykhomyrova/ChattyApp.git
cd chattyApp
```
Install all dependencies (using the `npm install` command).

Start the client server:
```
npm install
npm start
open http://localhost:3000
```

Start the main server:
```
cd chatty_server/
npm install
npm start
open http://localhost:3001
```
Both servers should be running at the same time for the app to work.

### Dependencies

* ReactJS
* Babel
* SASS
* Express
* Websockets
* UUID
