const mongoose = require("mongoose");

const librarySchema = mongoose.Schema({
  content: String,
  author: String,
  references: [String],
});

const Library = mongoose.model("Library", librarySchema);

module.exports = Library