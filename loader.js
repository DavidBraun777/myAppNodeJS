const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/mars', (req, res) => {
    res.send('Hello Mars!')
});

app.get('/mars/elysium', (req, res) => {
    res.send('Hello Elysium!')
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});