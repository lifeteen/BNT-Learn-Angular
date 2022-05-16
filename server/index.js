const express = require('express');
const app = express();

app.get('/', (req, res) =>
    res.send('hello world'));

app.post('/signin', (req, res) => {
    res.send({ message: 'OK' });
});

app.listen(3000, () => console.log("server is running..."));