const { getAll, create } = require("../../controllers/autores.controller");

const { checkEmailUnico } = require("../../middlewares/autores.middlewares");

const router = require("express").Router();

router.get("/", getAll);

router.post("/registro", checkEmailUnico, create);

module.exports = router;
