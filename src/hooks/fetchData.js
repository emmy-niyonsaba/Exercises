import { useEffect, useState } from "react";

export const fetchTool = (api) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true)
            const res = await fetch(api);
            if (!res.ok) throw new Error("Failed to fetch API provided");
            const data = await res.json()
            setData(data)


        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])


    return { data, error, loading }

}

