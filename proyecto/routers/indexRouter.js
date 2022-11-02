const express = require('express');
const router = express.Router();
const mainController=require("../controller/mainController")


router.get("/",mainController.index);
router.get("/search",mainController.search);


module.exports = router;