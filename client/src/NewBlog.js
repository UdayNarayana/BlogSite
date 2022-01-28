import React, { useState } from "react";
import { useHistory } from "react-router";
import './NewBlog.css'

const NewBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [validTitle, setValidTitle] = useState(false)
    const [validDesc, setValidDesc] = useState(false)
    const [validAuthor, setValidAuthor] = useState(false)

    const titleInput = (e) => {

        setTitle(e.target.value)
        if (e.target.value.trim() !== '') {
            setValidTitle(false)
        }

    }

    const descInput = (e) => {

        setBody(e.target.value)
        if (e.target.value.trim() !== '') {
            setValidDesc(false)
        }
    }

    const authorInput = (e) => {

        setAuthor(e.target.value)
        if (e.target.value.trim() !== '') {
            setValidAuthor(false)
        }
    }

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()

        //checks if the title entered is empty 
        if (title.trim() === '') {
            setValidTitle(true)
            return
        }
        setValidTitle(false)

        if (body.trim() === '') {
            setValidDesc(true)
            return
        }
        setValidDesc(false)

        if (author.trim() === '') {
            setValidAuthor(true)
            return
        }
        setValidAuthor(false)

        const newBlogContent = { title, body, author }

        fetch(' http://localhost:5000/new-blog', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBlogContent)
        }).then(() => {
            history.push("/")
        })

    }

    return (
        <React.Fragment>
            <h1>Add A New Blog</h1>
            <form onSubmit={submitHandler} className="new-blog">

                <label>Blog Title</label>
                <div className="input-box">
                    <input
                        onChange={titleInput}
                        type="text"
                        value={title}
                        className="input-field"
                    />
                    {validTitle && <p className="error">Please enter a title for the blog</p>}
                </div>

                <label>Blog Body</label>
                <div className="input-box">
                    <textarea
                        onChange={descInput}
                        cols="64"
                        rows="55"
                        value={body}
                    />
                    {validDesc && <p className="error">Please enter the body of the blog</p>}
                </div>

                <label>Blog Author</label>
                <div className="input-box">
                    <input
                        onChange={authorInput}
                        className="input-field"
                        type="text"
                        value={author}
                    />
                    {validAuthor && <p className="error">Please enter the author of the blog</p>}
                </div>

                <button>Add Blog</button>

            </form>
        </React.Fragment>


    )


}

export default NewBlog