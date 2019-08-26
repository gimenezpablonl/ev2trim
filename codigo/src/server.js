const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.set('port', 3000);
mongoose.connect('mongodb://localhost/ev2trim', {useCreateIndex: true,useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use('/api', require('./routes/api'));
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
})