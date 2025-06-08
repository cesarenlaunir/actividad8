const db = require("../config/db");

const selectAll = async (req, res) => {
    const [result] = await db.query(`
        SELECT *
        FROM autores
        ORDER BY nombre
        `);

    return result;
};

const selectByEmail = async (autorId) => {
    const [result] = await db.query(
        `
        SELECT *
        FROM autores
        WHERE email = ?
        `,
        [autorId]
    );

    return result[0];
};

const insert = async ({ nombre, email, imagen }) => {
    const [result] = await db.query(
        `
        INSERT INTO autores
        (nombre, email, imagen)
        VALUES (?, ?, ?)
        `,
        [nombre, email, imagen]
    );

    return result;
};

module.exports = { selectAll, selectByEmail, insert };
