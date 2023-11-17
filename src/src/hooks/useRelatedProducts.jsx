import { useEffect, useState } from 'react'
import { getRelatedProducts } from '../services/recomend'

export default function useRelatedProducts(productId) {
    const [recommendations, setRecommedations] = useState([])
    useEffect(() => {
        getRelatedProducts(productId).then(setRecommedations)
    }, [productId])
    return {
        recommendations
    }
}