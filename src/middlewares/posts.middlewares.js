const Posts = require("../models/posts.model");

const validarCamposPost = (req, res, next) => {
    const { titulo, descripcion, categoria, autores_id } = req.body;

    if (!titulo || !descripcion || !categoria || !autores_id) {
        return res.status(400).json({
            message:
                "Faltan datos obligatorios: titulo, descripcion, categoria o autores_id",
        });
    }

    next();
};

module.exports = validarCamposPost;
