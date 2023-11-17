import React from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import NavBarMaster from '../../components/NavBarMaster'
import useUser from '../../hooks/useUser'
import store from '../../redux/store'
import ListArticlesBySectionMaster from 'src/components/ListArticlesBySectionMaster'

export default function ArticlesBySection({ params }) {

    let currentPage = "ARTICULOS"

    const section = decodeURI(params.id.toUpperCase())

    const { user } = useUser()


    return (
        <div className="App">
            <Helmet> <title>LUIGIDIGITAL - ARTICULOS</title> </Helmet>
            <NavBarMaster currentPage={currentPage} />
            <Provider store={store}>
                <ListArticlesBySectionMaster section={section} />
            </Provider>
        </div>
    )
}

