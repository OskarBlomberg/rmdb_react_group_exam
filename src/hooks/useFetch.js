import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(null)
    const [isError, setIsError] = useState(false)
   

useEffect(() => {
    setIsloading(true)
    axios.get(url)
        .then(res => setData([...res.data]))
        .catch(err => setIsError(true))
        .finally(() => setIsloading(false))
}, [url])

return {data, isLoading, isError}

}