const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//connect to our Book Model

const Book = require("../models/book");

/* GET Route for the Book List page - READ Operation */
router.get("/", (req, res, next) => {
  Book.find((err, bookList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(BookList);
      res.render("book", { title: "Book List", BookList: bookList });
    }
  });
});

module.exports = router;
