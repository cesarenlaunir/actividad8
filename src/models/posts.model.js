const db = require("../config/db");

const selectAll = async (req, res) => {
    const [result] = await db.query(
        `
        SELECT
        posts.id as postId, posts.titulo, posts.descripcion, posts.fechacrea, posts.categoria,
        autores.id as autorId, autores.nombre, autores.email, autores.imagen
        FROM posts INNER JOIN autores ON (posts.autores_id = autores.id)
        ORDER BY fechacrea
        `
    );

    return result;
};

const selectByAuthorId = async (authorId) => {
    const [result] = await db.query(
        `
        SELECT
        posts.id as postId, posts.titulo, posts.descripcion, posts.fechacrea, posts.categoria,
        autores.id as autorId, autores.nombre, autores.email, autores.imagen
        FROM posts INNER JOIN autores ON (posts.autores_id = autores.id)
        WHERE autores_id = ?
        ORDER BY fechacrea
        `,
        [authorId]
    );

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

module.exports = { selectAll, selectByAuthorId, insert };
