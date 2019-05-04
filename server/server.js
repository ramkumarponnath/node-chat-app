const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

let app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log(`Server started at port ${PORT}`);
});

