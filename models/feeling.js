require('dotenv').config();

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    console.log(':3')
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: ${error.message}`)
  })

const feelingSchema = new mongoose.Schema({
  feeling: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  }
})

feelingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
})

module.exports = mongoose.model('Feeling', feelingSchema);
