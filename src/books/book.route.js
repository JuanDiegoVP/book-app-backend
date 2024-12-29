const express = require("express");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

// User routes
// Get all books
router.get("/", getAllBooks);

// Get single book
router.get("/:id", getSingleBook);

// Admin routes
// Post a book
router.post("/create-book", verifyAdminToken, postABook);

// Update a book
router.put("/edit/:id", verifyAdminToken, updateBook);

// Delete a book
router.delete("/:id", verifyAdminToken, deleteBook);

module.exports = router;
