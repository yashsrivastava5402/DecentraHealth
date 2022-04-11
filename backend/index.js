const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

app.use(morgan('tiny'));
app.use([
    cors(),
    express.static("public"),
    routes
]);

mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const port = process.env.PORT || 8000;

app.use()

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

export default index;