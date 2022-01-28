import { Link } from "react-router-dom";
import './BlogList.css'
import React from "react";

const BlogList = (props) => {

    return (
        <div className="bloglist-container">
            <h1>Blogs</h1>
            <p>There are currently {props.values.length} blogs in the list</p>
            {
                props.values.map((value) => (
                    <React.Fragment>
                        <Link to={`/blogs/${value.id}`} style={{
                            textDecoration: 'none',
                            color: '#000'
                        }}>
                            <div key={value.id} className="blog">

                                {value.title}
                                <p>By {value.author}</p>
                                <p>{value.body.slice(0, 50)}...</p>

                                <Link to={`/edit/${value.id}`}>
                                    <button className="edit-blog-btn">Edit Blog</button>
                                </Link>

                            </div>

                        </Link>

                    </React.Fragment>
                ))
            }
        </div >
    )
}

export default BlogList