const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/F8_education')
    .then(() => console.log('Connected DB sucessfully!')); 
}

module.exports = { connect };