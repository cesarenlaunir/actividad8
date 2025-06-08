const { getAll, create } = require("../../controllers/posts.controller");

const router = require("express").Router();

router.get("/", getAll);

router.post("/publish", create);

module.exports = router;
