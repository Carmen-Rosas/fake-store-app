import { useState, useEffect } from "react";

export function fetchProduct(id, detail) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                switch (detail) {
                    case 'image':
                        setData(data?.image);
                        break;
                    case 'title':
                        setData(data?.title);
                        break;
                    case 'description':
                        setData(data?.description);
                        break;
                    case 'price':
                        setData(data?.price);
                        break;
                    case 'category':
                        setData(data?.category);
                        break;
                    default:
                        setData(null);
                }
            });
    }, [id, detail]);

    return data;
}