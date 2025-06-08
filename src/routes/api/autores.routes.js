const { getAll, create } = require("../../controllers/autores.controller");

const {
    checkEmailUnico,
    validarCamposAutor,
} = require("../../middlewares/autores.middlewares");

const router = require("express").Router();

router.get("/", getAll);

router.post("/registro", validarCamposAutor, checkEmailUnico, create);

module.exports = router;
