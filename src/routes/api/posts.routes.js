const {
    getAll,
    create,
    getByAuthorId,
} = require("../../controllers/posts.controller");
const { checkAutorId } = require("../../middlewares/autores.middlewares");
const validarCamposPost = require("../../middlewares/posts.middlewares");

const router = require("express").Router();

router.get("/", getAll);
router.get("/:authorId", checkAutorId, getByAuthorId);

router.post("/publish", validarCamposPost, checkAutorId, create);

module.exports = router;
