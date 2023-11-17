import { useEffect, useState } from 'react'
import { getFrequentlyBoughtTogether } from '../services/recomend'

export default function useGetFrequentlyBoughtTogether(productId) {
    const [recommendations, setRecommedations] = useState([])
    useEffect(() => {
        getFrequentlyBoughtTogether(productId).then(setRecommedations)
    }, [productId])
    return {
        recommendations
    }
}