const Posts = require("../models/posts.model");

const getAll = async (req, res) => {
    const posts = await Posts.selectAll();
    res.json(posts);
};

const getByAuthorId = async (req, res) => {
    const authorId = Number(req.params.authorId);
    const posts = await Posts.selectByAuthorId(authorId);
    res.json(posts);
};

const create = async (req, res) => {
    const post = await Posts.insert(req.body);

    res.json(post);
};

module.exports = { getAll, getByAuthorId, create };
