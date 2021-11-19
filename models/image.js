const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  imageID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
