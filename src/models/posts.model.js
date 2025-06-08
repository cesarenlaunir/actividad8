const db = require("../config/db");

const selectAll = async (req, res) => {
    const [result] = await db.query(`
        SELECT *
        FROM posts
        ORDER BY fechacrea
        `);

    return result;
};

const insert = async ({ titulo, descripcion, categoria, autores_id }) => {
    const [result] = await db.query(
        `
        INSERT INTO posts
        (titulo, descripcion, fechacrea, categoria, autores_id)
        VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?)
        `,
        [titulo, descripcion, categoria, autores_id]
    );

    return result;
};

module.exports = { selectAll, insert };
