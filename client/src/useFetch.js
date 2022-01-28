import { useEffect, useState } from "react";

//custom hook
const useFetch = (url) => {

    const [values, setValues] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [otherValue, setOtherValue] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok)
                        throw Error("Sorry, couldn't find the resource you are looking for")
                    return res.json()
                })
                .then(data => {
                    setValues(data)
                    setOtherValue(data)
                    setIsPending(false)
                    setError(false)
                })
                .catch((err) => {
                    setError(err.message)
                    setIsPending(false)
                    setValues(false)
                })
        }, 1000)
    }, [url])

    return { otherValue, values, isPending, error }
}



export default useFetch