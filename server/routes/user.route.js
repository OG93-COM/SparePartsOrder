const { register, login } = require("../controllers/user.controller")
const userController = require("../controllers/user.controller")
const { checkUser } = require("../middleware/userMiddleware");


const router = require("express").Router();

    router.post("/", checkUser); 
    router.post("/register", register);
    router.post("/login", login);
    router.get("/api/user/", userController.findAllUser);
    router.delete("/api/user/:id", userController.deleteUser);

module.exports = router;