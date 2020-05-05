const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/api/v1/users/sign-up', async (req, res) => {
    try {
        await axios.post('http://localhost:8080/api/v1/users/sign-up', {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).send(err.response.data);
    }
});

app.post('/api/v1/users/authenticate', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/users/authenticate', {
            username: req.body.username,
            password: req.body.password
        });
        res.cookie('JWT', response.data.data.jwt, {
            httpOnly: true
        });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).send(err.response.data);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));