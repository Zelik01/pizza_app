const router = require("express").Router();
const userController = require("../controller/userController");
const auth = require("../authentication");


router.post("/signup", userController.createUser);
router.get("/", userController.getUsers);
router.delete("/:id",auth.authenticateUser,	userController.deleteUser);

module.exports = router;
