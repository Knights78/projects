const mongoose = require('mongoose');

const codeExampleSchema = new mongoose.Schema({
  title: String,
  code: String,
  expectedOutput: String,
});

module.exports = mongoose.model('codeproblems',codeExampleSchema);
