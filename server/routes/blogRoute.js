const express = require('express')
const router = express.Router()
const route = require('./routeBlock')

//get all blogs
router.get('/', route.getAllBlog)

//get particular blog
router.get('/:id', route.getOneBlog)

//add a new blog
router.post('/new-blog', route.postBlog)

//updating a blog
router.put('/edit/:id', route.editBlog)

//deleting a blog
router.delete('/:id', route.deleteBlog)

module.exports = router