const db = require("../config/db");

const selectAll = async (req, res) => {
    const [result] = await db.query(`
        SELECT *
        FROM autores
        ORDER BY nombre
        `);

    return result;
};

const selectById = async (autorId) => {
    const [result] = await db.query(
        `
        SELECT *
        FROM autores
        WHERE id = ?
        `,
        [autorId]
    );

    return result[0];
};

const selectByEmail = async (autorEmail) => {
    const [result] = await db.query(
        `
        SELECT *
        FROM autores
        WHERE email = ?
        `,
        [autorEmail]
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

module.exports = { selectAll, selectById, selectByEmail, insert };
