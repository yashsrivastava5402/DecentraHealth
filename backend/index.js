const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const morgan=require('morgan');

const app = express();
const server = http.createServer(app);

app.use(morgan('tiny'));
app.use([
    cors(),
    express.static("public"),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    routes
]);
app.disable('etag');

mongoose.connect("mongodb://localhost:27017/DecentraHealth", {useNewUrlParser: true, useUnifiedTopology: true});

const port = 8000;

// app.use()

server.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

// export default index;