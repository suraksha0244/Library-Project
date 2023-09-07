var express = require("express");
const Library = require("../models/Library");
var router = express.Router();
router.post("/addbooks", (req, res) => {
  let { userId, title, description, image, Author, Genre, PublicationDate } =
    req.body;
  if (
    !userId ||
    !title ||
    !description ||
    !image ||
    !Author ||
    !Genre ||
    !PublicationDate
  ) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  Library.find({ $and: [{ title: title }, { userId: userId }] }).then(
    (savedBook) => {
      if (savedBook.length > 0) {
        return res
          .status(422)
          .json({ error: "Book already exists with that title" });
      }
      const book = new Library({
        userId,
        title,
        description,
        image,
        Author,
        Genre,
        PublicationDate,
      });
      book
        .save()
        .then((book) => {
          res.json({
            message: "saved successfully",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );
});

router.get("/getbooks", (req, res) => {
  let { userId } = req.query;
  Library.find({ userId: userId })
    .then((books) => {
      res.json({ books: books });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/deletebook", (req, res) => {
  let { userId, bookId } = req.body;
  console.log(userId, bookId);
  Library.deleteOne({ $and: [{ userId: userId }, { _id: bookId }] })
    .then((book) => {
      res.json({ book: book });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
