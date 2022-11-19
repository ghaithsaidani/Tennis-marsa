let express = require("express");
const {addReservation}=require("../controllers/reservation.controller")
const {isAuthenticated} = require("../middleware/auth");

let router = express.Router();

router.post("/add",addReservation)

module.exports = router;
