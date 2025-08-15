require('dotenv').config()

const Feeling = require('./models/feeling');
const mongoose = require('mongoose');

Feeling.find({}).then((result) => {
  result.forEach((feeling) => {
    console.log(feeling);
  })
  mongoose.connection.close();
})
