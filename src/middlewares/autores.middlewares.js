const Autores = require("../models/autores.model");

const checkEmailUnico = async (req, res, next) => {
    const email  = await req.body.email;

    if (!email) {
        return res.status(400).json({ message: "Email es obligatorio" });
    }

    const autor = await Autores.selectByEmail(email);

    if (autor) {
        return res.status(400).json({ message: "Email ya existe" });
    }

    next();
};

module.exports = { checkEmailUnico };
