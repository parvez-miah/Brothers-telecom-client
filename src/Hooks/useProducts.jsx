import { useEffect, useState } from 'react'
import axios from "axios";


const useProducts = () => {
    const baseURL = "http://localhost:5000/products";

    const [product, useproduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            useproduct(response.data);
            setLoading(false)
        });
    }, []);

    if (!product) return null;

    return [

        product, loading
    ]
}

export default useProducts