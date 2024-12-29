const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const course = new Schema({
  name: { type: 'string', required: true },
  description: { type: 'string', maxLength: 255 },
  image: {type: 'string', default: '/Image/courses/NodeJS.png'},
  videoId: {type: 'string'},
  slug: { type: String, unique: true, slug: "name", },
  level: {type: 'string'},
}, {
  timestamps: true
});

module.exports = mongoose.model('course', course);