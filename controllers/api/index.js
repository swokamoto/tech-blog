const router = require('express').Router();
const Blog = require('../../models/Blog');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// localhost:3001/api/
router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            id: req.body.id,
            title: req.body.title,
            content: req.body.content
        });

        if(newBlog) {
            res.status(200).json(newBlog);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;