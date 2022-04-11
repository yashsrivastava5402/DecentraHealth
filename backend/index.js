const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const morgan=require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use([
    cors(),
    express.static("public"),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    routes
]);

mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const port = process.env.PORT || 8000;

app.use()

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

export default index;