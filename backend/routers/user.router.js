const router = require("express").Router();
const libraryUserController = require("../controllers/libraryUser.controller");
const routeCheck = require("../middleware");

// Define routes for library user-related operations
router.post("/login", routeCheck, libraryUserController.libraryAuthFunc);
router.get("/:id", routeCheck, libraryUserController.getLibraryUserById);

module.exports = router;
