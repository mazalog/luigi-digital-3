import { useEffect, useState } from 'react'
import articlesServices from '../services/articlesForId'

export default function useArticlesForId(c) {

    const [article, setArticles] = useState({
        brand: '',
        cover_photo: '',
        information: '',
        photos: [],
        price: 0,
        product_name: '',
        sale_price: 0,
        sizes: [],
        gender: '',
    })
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')


    useEffect(() => {
        articlesServices.getArticleForId(c)
            .then(initialArticles => {
                setArticles(initialArticles)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setMessage('Ups, Error de conexión')
            })
    }, [c])



    return { article, loading, message }
}