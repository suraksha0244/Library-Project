const router = require("express").Router();
const libraryController = require("../controllers/library.controller");

// Define the routes for library-related operations
router.post("/", libraryController.createLibraryItem);
router.get("/", libraryController.getAllLibraryItems);

module.exports = router;
