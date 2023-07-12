require('dotenv').config();
const express = require('express');
const app = express();
const Task = require('./model/task');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

mongoose.connect(process.env.dbURI)
.then(() => {
    console.log('DB Connected');
    app.listen(3000);
}).catch((err) => {
    console.log(err);
})

app.set('view engine','ejs');
app.use(express.urlencoded({extended: true})); //middleware to parse JSON data from requests
app.use(express.static('public')); //middleware to serve static CSS files
app.use(taskRoutes);
