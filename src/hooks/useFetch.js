import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController(); // 🆕 create a controller
      const signal = controller.signal;
        
      setIsLoading(true);
      setIsError(false);
  
      axios.get(url, { signal }) // 🆕 pass signal to axios
        .then((response) => {
        setData(response.data);
        })
       .catch((error) => {
          if (axios.isCancel(error)) {
            // 🆗 fetch was cancelled on purpose
            console.log("Request cancelled:", error.message);
          } else {
            setIsError(true);
          }
        })
       .finally(() => {
           setIsLoading(false);
        });
  
        return () => {
          controller.abort(); // 🧹 cleanup: cancel the request if still running
        };
      }, [url]);
  
    return { data, isLoading, isError };
  };