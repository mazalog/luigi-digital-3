import React from "react";
import styles from "./cart.module.scss";
import Layout from "../../components/Layout";
import { Provider } from "react-redux";
import store from "../../redux/store";
import CartBody from '../../components/CartBody/index.js'
import { Helmet } from "react-helmet";

export default function CartPage(props) {
    return (
        <Provider store={store}>
            <Helmet>
                <title>LUIGI DIGITAL- CESTA</title>
                <meta name="description" content="MODASPORTS CESTA DE COMPRAS" />
            </Helmet>
            <Layout bgSearch noCategories  noAlert>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <CartBody />
                    </main>
                </div>
            </Layout>
        </Provider>
    )
}

