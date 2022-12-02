const express = require('express');
const userApiController = require('../../controller/api/userApiController');
const router = express.Router();

router.get("/", userApiController.list);
router.get("/lastUser", userApiController.lastUser)
router.get("/detalle/:id", userApiController.detail);


module.exports = router