const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
    res.send("Hello from DesignPoint!")
})

app.listen(app.get('port'))