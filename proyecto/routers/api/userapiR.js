const express = require('express');
const userApiController = require('../../controller/api/userApiController');
const router = express.Router();

router.get("/", userApiController.list);
router.get("/read", userApiController.read);
router.get("/:id", userApiController.detail);

module.exports = router