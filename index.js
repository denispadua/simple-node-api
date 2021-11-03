const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 5000, () => { console.log('Our App Is Up And Running!'); });
module.exports = app