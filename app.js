const express = require('express');
const app = express();

const mongoose = require('mongoose');

//config routes
const indexRoute = require('./routes/index');
const listRoute = require('./routes/list');


//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


//routes
app.use(indexRoute);
app.use(listRoute);

// connect mongoose
mongoose.connect('mongodb://localhost:27017/shopping-list', {
     useNewUrlParser: true,
     useUnifiedTopology: true
});

// Server configuration
app.listen(3000, () => console.log('Server listening on port:3000'));
