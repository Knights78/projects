const mongoose = require('mongoose');
//we have created the function and stored that as an object for understanding purpose now whwnever i will use connectMongoDB i can easily accces this function because i have exportes ths 

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/codefix', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};


module.exports = { connectMongoDB };


