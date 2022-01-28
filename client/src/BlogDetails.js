import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { values, otherValue, isPending, error } = useFetch('http://localhost:5000/blogs/' + id)

    const history = useHistory()

    const deleteBlog = () => {
        fetch('http://localhost:5000/blogs/' + id, {
            method: "DELETE"
        })
            .then(() => {
                history.push("/")
            })
    }

    return (

        <div className="blog-details">

            {isPending &&
                <div style={{
                    fontWeight: 'bolder',
                    fontSize: '1.5em'
                }}>
                    Loading...
                </div>
            }

            {error &&
                <div style={{
                    fontSize: '2em',
                    fontWeight: 'bolder'
                }}>
                    {error}
                </div>
            }

            {values && (
                <article>
                    <h2>{otherValue.title}</h2>
                    <p>By {otherValue.author}</p>
                    <div style={{
                        border: 'none',
                        borderRadius: '0.5em',
                        background: '#f2f0e9',
                        padding: '0.5em',
                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
                    }}>
                        {otherValue.body}
                    </div>
                    <button onClick={deleteBlog} className="delete-blog"
                        style={{
                            marginTop: '1.3em',
                            width: '7em',
                            height: '2.5em',
                            borderRadius: '0.5em',
                            border: 'None',
                            cursor: 'pointer',
                            color: '#fff',
                            backgroundColor: 'crimson'
                        }}>
                        Delete Blog
                    </button>
                </article>
            )}

        </div>

    )
}

export default BlogDetails