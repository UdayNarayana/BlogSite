const pool = require('../database/db')

//to get all the blogs fromt the database
const getAllBlog = async (req, res) => {
    try {
        const allBlogs = await pool.query("select * from blogs")
        res.json(allBlogs.rows)
    }
    catch (err) {
        console.log(err)
    }
}

//to get a particular blog from the database
const getOneBlog = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await pool.query("select * from blogs where id=$1", [id])
        res.json(blog.rows[0])
    }
    catch (err) {
        console.log(err)
    }
}

//to add a new blog to the database
const postBlog = async (req, res) => {
    try {
        const { title, body, author } = req.body
        const newBlog = await pool.query("insert into blogs (title,body,author) values($1,$2,$3)", [title, body, author])
        res.json(newBlog.rows[0])
    }
    catch (err) {
        console.log(err)
    }
}

//to edit a blog present in the database
const editBlog = async (req, res) => {
    try {
        const { id } = req.params
        const { title, body, author } = req.body
        const updatedBlog = await pool.query("update blogs set title=$1, body=$2, author=$3 where id=$4", [title, body, author, id])
        res.json(updatedBlog.rows[0])
    }
    catch (err) {
        console.log(err)
    }
}

//to delete a particular blog in the database
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBlog = pool.query("delete from blogs where id=$1", [id])
        res.json("deleted")
    }
    catch (err) {
        console.log(err)
    }
}

//exporting all the functions
module.exports = { getAllBlog, getOneBlog, postBlog, editBlog, deleteBlog }