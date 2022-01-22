const fs = require("fs")
const bodyParser = require("body-parser")
const cors = require('cors');

const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

const db = require('./queries');

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())

app.get('/login/:username/:password', db.login);

app.get('/posts/:filter/:userid', db.getPosts);

app.post('/posts/editpost', db.editPost);

app.post('/newuser',db.addUser);

app.post('/createpost', db.addPost);

app.post('/deletepost',db.deletePost);




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
