import { useContext, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from '@tanstack/react-query'

const useCart = () => {

    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    const { refetch,  data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {

            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return res.json();


        },

    })


    return [
        cart, refetch, loading

    ]


}

export default useCart