
# Small-Talk

This is an instant messager with live games. 
You are able to add, delete, and chat with connections as well as play live games. 

Link to deployed site: https://small-talk-8943a9c264fc.herokuapp.com/

It is built with React for the front end and an express server in the back end. 
The app's server and client side need to be running synchronously. The repositories are as follows. 


Small-Talk-client: 
https://github.com/wilni/small-talk-client

Small-Talk-server: 
https://github.com/wilni/small-talk-server

<img width="700" alt="SmallTalk desktop" src="https://user-images.githubusercontent.com/81815266/186259073-dff09aea-0aed-4354-b48d-853343836464.png"  height="400">

<div>

<img width="447" alt="Screen Shot 2023-10-08 at 11 54 54 AM" src="https://github.com/wilni/small-talk-server/assets/81815266/e8f453a7-917f-4e33-aa06-0fcee248fc20">


<img width="450" alt="Screen Shot 2023-10-08 at 11 56 58 AM" src="https://github.com/wilni/small-talk-server/assets/81815266/25c4f242-35d9-465b-9101-10c96dbf7e6a">

App Screenshots
    
    
## Tech Stack

#### Front End
- React
- Sass
- Js
- Axios

#### Back End
- Node Js
- Express 
- MySQL 
- Knex js
- Axios


#### OAuth
 - Auth0

 #### deployment
 - Heroku

## Install and Run

This app is built with React for the front end and an express server in the back end. 
Both the server and client side of the app need to be running synchronously. The repos are as follows. 

Small-Talk-client: 
https://github.com/wilni/small-talk-client

Small-Talk-server: 
https://github.com/wilni/small-talk-server

For the client side: 

- clone the repository 
- run npm install
- run npm start 


For the server side: 
- install MySQL
- clone the repository
- Configure knexfile.js file with SQL server info
- run npm install
- run node index.js


## dependencies

    //client 
    "axios": "^0.27.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dotenv": "^0.1.3",
    "react-router-dom": "5.3",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.0.7",
    "sass": "^1.54.0",
    "socket.io-client": "^4.5.1",
    "uniqid": "^5.4.0",
    
    //server
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "knex": "^2.2.0",
    "mysql": "^2.18.1",
    "socket.io": "^4.5.1",
    "uniqid": "^5.4.0"


## Lessons Learned

From this project, I became familiar with many new technologies and aspects of web development. I implemented only functional components and websockets which were both new to me. This was also the first application where I deployed a front-end and a back-end server. I had to navigate a few things to set up my production database and environment.


## next steps 

- add more games (Simon, hangman)
- Implement end to end encryption
- Create a react native version to deploy the app on iOS, Android as well as the web.

## License

MIT License

Copyright (c) 2022 Wilniyobri Tavarez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
