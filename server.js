const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const path = require('path');
const FormData = require('form-data');
const multer = require('multer');
const upload = multer();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/api/v1/users/sign-up', async (req, res) => {
    try {
        await axios.post(process.env.MOLECIOUS_BACKEND_URL + '/api/v1/users/sign-up', {
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
        const response = await axios.post(process.env.MOLECIOUS_BACKEND_URL + '/api/v1/users/authenticate', {
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

app.post('/api/v1/users/logout', (req, res) => {
    res.clearCookie('JWT');
    res.sendStatus(200);
});

app.post('/api/v1/users/jwt', async (req, res) => {
    try {
        const response = await axios.post(process.env.MOLECIOUS_BACKEND_URL + '/api/v1/users/jwt', null, {
            headers: {
                'Cookie': `JWT=${req.cookies['JWT']}`
            }
        });
        res.send(response.data);
    } catch (err) {
        res.status(400).send(err.response.data);
    }
});

app.post('/api/v1/inferences', upload.single('file'), async (req, res) => {
    try {
        const formData = new FormData();
        formData.append('file', req.file.buffer, { filename: req.file.originalname });

        const response = await axios.post(process.env.MOLECIOUS_BACKEND_URL + '/api/v1/inferences', formData, {
            headers: {
                ...formData.getHeaders(),
                'Cookie': `JWT=${req.cookies['JWT']}`
            }
        });
        res.send(response.data);
    } catch (err) {
        res.status(400).send(err.response.data);
    }
});

app.get('/api/v1/inferences/users/jwt', async (req, res) => {
    try {
        const response = await axios.get(process.env.MOLECIOUS_BACKEND_URL + '/api/v1/inferences/users/jwt', {
            headers: {
                'Cookie': `JWT=${req.cookies['JWT']}`
            }
        });
        res.send(response.data);
    } catch (err) {
        res.status(400).send(err.response.data);
    }
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));