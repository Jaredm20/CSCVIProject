const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    next();
});

app.use(express.static(path.join(__dirname, '../JST/JST/myapp/public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
