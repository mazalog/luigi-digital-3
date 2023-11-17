import { useEffect, useState } from 'react'
import articlesServices from '../services/articlesForCategory'
import articlesServicesAdmin from '../services/articles'

export default function useArticlesForCategory(c) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [loadingPost, setLoadingPost] = useState(false)

    useEffect(() => {
        articlesServices.getArticlesForCategory(c)
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


    const deleteArticle = (id) => {
        articlesServicesAdmin
            .deleteArticle(id)
            .then(() => {
                setArticles(articles.filter((article) => article.id !== id))
            })
    }

    const updateArticle = (id, values) => {
        setLoadingPost(true)
        articlesServicesAdmin
            .update(id, values)
            .then(() => {
                setArticles(articles.map((article) => article.id === id ? values : article))
                setLoadingPost(false)
                setMessage('Articulo editado')
                setTimeout(() => {
                    setMessage('')
                }, 4000)
            })
            .catch(() => {
                console.log('Ups, error set article')
                setLoadingPost(false)
                setMessage('Ups, Error')
                setTimeout(() => {
                    setMessage('')
                }, 4000)
            })
    }

    const createArticle = (values) => {
        setLoadingPost(true)
        articlesServicesAdmin
            .create(values)
            .then((returnedArticle) => {
                setLoadingPost(false)
                setMessage('Articulo creado')
                setArticles([...articles, returnedArticle])
                setTimeout(() => {
                    setMessage('')
                }, 4000)
            })
            .catch(() => {
                setLoadingPost(false)
                setMessage('Error en la creacion')
                setTimeout(() => {
                    setMessage('')
                }, 4000)
                console.log('Error en la creacion')
            })
    }




    return { articles, loading, message, createArticle, deleteArticle, updateArticle, loadingPost }
}