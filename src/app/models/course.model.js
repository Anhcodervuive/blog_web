const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
  name: { type: 'string', required: true },
  description: { type: 'string', maxLength: 255 },
  image: Date,
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('course', course);