const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const users = [];

//register a new user
app.post('/users', (req, res) => {
    const { userId, name } = req.body;
    if(!userId || !name) {
        return res.status(400).send('userId and name are required');
    }
    if(users.find(user => user.userId === userId)) {
        return res.status(400).send('User already exists');
    }
    users.push({ userId: String(userId), name });
    res.send('User registered successfully');
});

//get all users
app.get('/users', (req, res) => {
    res.send(users);
});

//get a user by userId
app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const user = users.find(user => user.userId === userId);
    if(!user) {
        return res.status(404).send('User not found');
    }
    res.send(user);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});