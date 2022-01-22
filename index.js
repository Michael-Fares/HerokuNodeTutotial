/* BOILERPLATE */
 // configures the dotenv library so that we can access our secret keys as environment variables in production using
 // process.env 
require('dotenv').config();

// import express and cors into our project
const express = require('express');
const cors = require('cors');

// import our "dummy data" of 3 posts into our main index.js file. In a real wrold server, this data would not be stored in a js file, 
// but on a database that would then be queired for the desired data before being converted to JSON.
/* DUMMY DATA */
const posts = require('./posts.js')

/* MORE BOILERPLATE*/
//initialize our server with the express library by calling express(), which returns a server object, 
// and saving it to a varibale called app
const app = express();

// tell our app to use the cors library to allow it to be accesed from a frontend 
app.use(cors())
// tell our app to be able to parse JSON data sent in requests to and responses from our sever.
app.use(express.json())

/* ROUTES: below we will create two simple get routes for our server */
// route 1: a welcome message at the base "/" of our server url 
app.get('/', (req, res) => {
  res.send('Welcome to my server!')
})
// route 2: a route "/posts" to get all posts 
app.get('/posts', (req, res) => {
  res.json(posts)
})

/* PORT */
// tell our server that it should run on HEROKU's preferred port once in production and hosted 
// (HEROKU will automatically choose a port via process.env.PORT, and we don't need to definte a process.env.PORT locally)
// OR || in local develpment, our server will listen on http://localhost:4000
const port = process.env.PORT || 4000

/* LISTEN: tell the server to automatically listen on our port 
 * (http://localhost:4000 for development, HEROKU's automatically chosen port for production ) */
app.listen(port, () => { 
  console.log(`Server listening on port ${port}!`)
})

