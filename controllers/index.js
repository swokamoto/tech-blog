const router = require('express').Router();
const api = require('./api');
const Blog = require('../models/Blog');

// localhost:3001/api
router.use('/api', api);

router.get('/', async (req, res) => {
    const blogData = await Blog.findAll();
    const blogs = blogData.map((blog) => {
        return blog.get({ plain: true });
    })
    res.render('blog', { blogs } );
});


// localhost:3001/blog
router.get('/blog', (req, res) => {
    res.json('Hello World');
});

module.exports = router;