import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const { values, otherValue, isPending, error } = useFetch('http://localhost:5000/blogs')

    // const [values, setValues] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/blogs')
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((data) => {
    //             setValues(data)
    //         })

    // }, [])

    return (
        <div className="home">

            {error &&
                <div style={{
                    fontWeight: 'bolder',
                    fontSize: '1.5em'
                }}>
                    {error}
                </div>
            }

            {isPending &&
                <div style={{
                    fontSize: '2em',
                    fontWeight: 'bolder'
                }}>
                    Loading...
                </div>
            }

            {values && <BlogList values={otherValue} />}

        </div >
    )
}

export default Home