import axios from "axios"
import { useEffect, useState } from "react"
import { base_URL } from "./baseUrl"


export const useFetch = (route, postData) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)
            try {
                const fetchData = await axios.get(`${base_URL}${route}`, postData)

                setData(fetchData.data)
                setLoading(false)

            }
            catch (error) {
                // console.log(error,"error")
                setError(error?.response?.data?.message)
                setLoading(false)
            }
        }
        fetchData()

    }, [])

    const reFetchData = async () => {
        const token = JSON.parse(localStorage.getItem("loginUser"));

        setLoading(true)
        try {
            const fetchData = await axios.get(`${base_URL}${route}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })

            setData(fetchData.data)
            setLoading(false)

        }
        catch (error) {
            // console.log(error,"<--- error");
            setError(error?.response?.data?.message)
            setLoading(false)
        }
    }

    return { data, loading, error, reFetchData }

}




