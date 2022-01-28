import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"


const EditBlog = () => {

    const { id } = useParams()

    useEffect(() => {
        fetch('http://localhost:5000/blogs/' + id)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
                setEditTitle(data.title)
                setEditDesc(data.body)
                setEditAuthor(data.author)
            })
    }, [id])


    const [data, setData] = useState({})

    const [title, setEditTitle] = useState('')
    const [body, setEditDesc] = useState('')
    const [author, setEditAuthor] = useState('')

    const history = useHistory()

    const updateHandler = (e) => {
        e.preventDefault()
        const updatedBlog = { title, body, author }
        fetch('http://localhost:5000/blogs/edit/' + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedBlog)
        })
            .then(() => {
                console.log(data)
                history.push("/")
            })
    }

    return (
        <React.Fragment>

            <div>
                <h1>Edit Blog</h1>
                <form onSubmit={updateHandler} className="new-blog">

                    <label>Blog Title</label>
                    <div className="input-box">
                        <input
                            onChange={(e) => setEditTitle(e.target.value)}
                            type="text"
                            value={title}
                            className="input-field"
                        />
                    </div>

                    <label>Blog Body</label>
                    <div className="input-box">
                        <textarea
                            onChange={(e) => setEditDesc(e.target.value)}
                            cols="64"
                            value={body}
                        />
                    </div>

                    <label>Blog Author</label>
                    <div className="input-box">
                        <input
                            onChange={(e) => setEditAuthor(e.target.value)}
                            className="input-field"
                            type="text"
                            value={author}
                        />
                    </div>
                    <button>Save</button>

                </form>
            </div>


        </React.Fragment>
    )
}

export default EditBlog