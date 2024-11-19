const express = require("express");
const { createNewUser, getAllUsers, getUser, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

// create a user
router.post("/", createNewUser);
// get all users
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
