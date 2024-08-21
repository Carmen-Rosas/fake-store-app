import { useState, useEffect } from "react";

export function fetchUser(id, detail) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                switch (detail) {
                    case 'email':
                        setData(data?.email);
                        break;
                    case 'username':
                        setData(data?.username);
                        break;
                    case 'name':
                        setData(data?.name);
                        break;
                    case 'address':
                        setData(data?.address);
                        break;
                    case 'phone':
                        setData(data?.phone);
                        break;
                    default:
                        setData(null);
                }
            });
    }, [id, detail]);

    return data;
}