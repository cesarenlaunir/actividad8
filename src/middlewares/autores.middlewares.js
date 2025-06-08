const Autores = require("../models/autores.model");

const validarCamposAutor = (req, res, next) => {
    const { nombre, email, imagen } = req.body;

    if (!nombre || !email || !imagen) {
        return res.status(400).json({
            message: "Faltan datos obligatorios: nombre, email o imagen",
        });
    }

    next();
};

const checkAutorId = async (req, res, next) => {
    const autorId = Number(req.params.authorId) || req.body.autores_id;

    if (!autorId) {
        return res.status(400).json({ message: "Falta el id de autor" });
    }

    const autor = await Autores.selectById(autorId);

    if (!autor) {
        return res.status(400).json({ message: "Autor no existe" });
    }

    req.autorId = autorId;

    next();
};

const checkEmailUnico = async (req, res, next) => {
    const email = await req.body.email;

    const autor = await Autores.selectByEmail(email);

    if (autor) {
        return res.status(400).json({ message: "Email ya existe" });
    }

    next();
};

module.exports = { validarCamposAutor, checkAutorId, checkEmailUnico };
