import React from 'react'
import ShoppingPage from '../../components/ShoppingPage';
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Layout from '../../components/Layout';
import useArticlesForCategory from 'src/hooks/useArticlesForCategory';
import { Helmet } from 'react-helmet';

export default function StorePage({ params }) {

    const section = decodeURI(params.id.toUpperCase())

    const { articles, loading } = useArticlesForCategory(section)

    const sectionNoValided=[
        'SUSCRIPCIONES-GIFT-CARDS',
        'CONTROLES-ACCESORIOS',
        'PS3',
        'FUNKOS'
    ]

    if(sectionNoValided.some(x=>x===section)) return (
        <Provider store={store}>
        <Helmet>
            <title> LUIGIDIGITAL - {section}</title>
            <meta name="description" content=" secciones" />
        </Helmet>
        <Layout  categorie={section} title={section} >
            <div className="App">
                <ShoppingPage title={section} articles={articles} loading={loading} />
            </div>
        </Layout>
    </Provider>
    )

    return (
        <Provider store={store}>
            <Helmet>
                <title> LUIGIDIGITAL - {section}</title>
                <meta name="description" content=" secciones" />
            </Helmet>
            <Layout categorie={section} brands={true} header={true}>   
                <div className="App">
                    <ShoppingPage title={section} articles={articles} loading={loading} />
                </div>
            </Layout>
        </Provider>
    )
}
