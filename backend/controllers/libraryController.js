const LibraryModel = require("../models/library.model");

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await LibraryModel.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
};

exports.createBook = async (req, res) => {
  try {
    const data = req.body;
    const bookModel = new LibraryModel(data);
    const response = await bookModel.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
};
