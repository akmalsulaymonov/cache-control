const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public'), {'maxAge':'2h'}))  // 2 hpurs

app.get('/hi', (req, res) => {
    res.header('Cache-Control', 'public, max-age=86400')    // day
    res.header('Content-Type', 'application/html')
    res.send(new Buffer('<h2>Test string</h2>'))
})

app.listen(3000, () => console.log('app listening on port 3000'))