const Autores = require("../models/autores.model");

const getAll = async (req, res) => {
    const autores = await Autores.selectAll();
    res.json(autores);
};

// const getById = async (req, res) => {
//     const { email } = await Autores.selectByEmail(email);

//     res.json(autores);
// };

// const getByEmail = async (req, res) => {
//     const { email } = await Autores.selectByEmail(email);

//     res.json(autores);
// };

const create = async (req, res) => {
    const usuario = await Autores.insert(req.body);

    res.json(usuario);
};

// module.exports = { getAll, getByEmail, getById, create };
module.exports = { getAll, create };
