import {useState, useEffect} from "react";

export function useFetch(extra) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products${extra}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return data;
}