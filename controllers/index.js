const router = require('express').Router();
const api = require('./api');
const Blog = require('../models/Blog');

// localhost:3001/api
router.use('/api', api);

// localhost:3001/blog
router.get('/blog', (req, res) => {
    res.json('Hello World');
});

module.exports = router;