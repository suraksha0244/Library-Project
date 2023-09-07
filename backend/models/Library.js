const mongoose = require("mongoose");

const LibrarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
    unique: false,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  Author: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  PublicationDate: {
    type: String,
    required: true,
  },
});

const Library = mongoose.model("library", LibrarySchema);

module.exports = Library;
