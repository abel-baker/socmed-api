const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));
app.use(routes);

// mongoose.set('debug', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socmed-api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));