let express = require("express");
const {addTerrain,getAllTerrains}=require("../controllers/terrain.controller")
const {isAuthenticated} = require("../middleware/auth");

let router = express.Router();

router.post("/add",addTerrain)
router.get("/getall",isAuthenticated,getAllTerrains)

module.exports = router;
