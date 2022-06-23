const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db.js')
const router = require('./routes.js');

const app = express();
const port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

// app.use(express.static(path.join(__dirname, '../my-app/out')));

// app.get('/api/users', (req, res) => {
//   console.log('api/users called!')
//   res.json(users);
// });

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   console.log('Adding user:::::', user);
//   users.push(user);
//   res.json("user addedd");
// });

// app.get('/', (req,res) => {
//   res.sendFile(path.join(__dirname, '../my-app/out/index.html'));
// });
