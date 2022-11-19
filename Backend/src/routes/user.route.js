let express = require("express");
const { register, login,logout,userProfile,singleUser} = require("../controllers/user.controller");
const {isAuthenticated} = require("../middleware/auth");

let router = express.Router();

router.post("/register",  register);
router.post("/login", login);
router.get('/logout', logout );
router.get('/getme', isAuthenticated,  userProfile );
router.get('/user/:id', singleUser );
router.get("/isauthentificated",isAuthenticated)

module.exports = router;
