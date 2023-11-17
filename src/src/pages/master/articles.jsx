import React from 'react'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import HorizontalCard from 'src/components/HomeCard/horizontal-card'
import ListArticles from '../../components/ListArticlesMaster'
import NavBarMaster from '../../components/NavBarMaster'
import useUser from '../../hooks/useUser'
import store from '../../redux/store'
import styles from "./index.module.scss";

export default function ArticlesPage() {

    let currentPage = "ARTICULOS"

    const { user } = useUser()

    return (
        <div className="App">
            <Helmet> <title>LUIGIDIGITAL - ARTICULOS</title> </Helmet>
            <NavBarMaster currentPage={currentPage} />
            <Provider store={store}>

                <div className={styles.containerCards}>
                    <HorizontalCard
                        bgColor="#fff"
                        href="/master/section/FUNKOS"
                        title=""
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FFUNK.jpeg?alt=media&token=e81d761a-b42f-452c-aba7-50c6c3fcea5a"
                    />
                    <HorizontalCard
                        bgColor="#fff"
                        href="/master/section/PS3"
                        title="PS3"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2Fb9e814ac5468b49ecd90d45f20257dc5.webp?alt=media&token=b4ebd754-c8ec-43c4-b2b2-5c9a6ea292ae"
                    />
                    <HorizontalCard
                        bgColor="#fff"
                        href="/master/section/PS4"
                        title="PS4"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2Fps4_1x.webp?alt=media&token=be168af4-303a-4441-82bf-5049b1603e6a"
                    />
                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="ALQUILER PS4 Y PS5"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2Fps4_1x.webp?alt=media&token=be168af4-303a-4441-82bf-5049b1603e6a"
                        href="/master/section/ALQUILER-PS"
                    />
                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="XBOX 360"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2Fxbox-slim.png?alt=media&token=19debd68-79e3-4673-a2a6-8adf8206f725"
                        href="/master/section/X360"
                    />
                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="XBOX ONE Y SERIES S/X"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2Fxbox%20one%20xbox%20series.jpg?alt=media&token=62759a3d-5f38-4b05-a596-69ad9c7b47ef"
                        href="/master/section/XONE-XSERIES"
                    />
                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="ALQUILER"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2Fxbox%20one%20xbox%20series.jpg?alt=media&token=62759a3d-5f38-4b05-a596-69ad9c7b47ef"
                        href="/master/section/ALQUILER"
                    />

                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="NINTENDO SWITCH"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2Fimage_processing20200908-12254-1eumqhh.png?alt=media&token=f30c2207-f1ea-435f-b1b9-8e8c2f114629"
                        href="/master/section/NSWITCH"
                    />
                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="JUEGOS RETRO"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2F4a1cacbe919300b15645482f7cac3aad.webp?alt=media&token=60215bb9-959a-4184-8876-673e8c2d7e42"
                        href="/master/section/JRETRO"
                    />
                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="CONTROLES Y ACCESORIOS"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2F2d5a5dabcd9587ee812bd4a0135c1ac6.webp?alt=media&token=2e4597eb-25a2-4f6d-a135-7ab3aa27b0d3"
                        href="/master/section/CONTROLES-ACCESORIOS"
                    />

                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="CONSOLAS"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/mazasocial.appspot.com/o/CONSOLAS.webp?alt=media&token=9dfea89e-e458-4064-b646-669a0884ae77"
                        href="/master/section/CONSOLAS"
                    />

                    <HorizontalCard
                        bgColor="#f1f1f1"
                        sizeAuto
                        title="SUSCRIPCIONES & GIFT CARDS"
                        bgImage="https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2F4a7a29894e86e947e8c724b2ea9e0686.webp?alt=media&token=02ece3f5-af39-4597-aa70-4b5170e9f805"
                        href="/master/section/SUSCRIPCIONES-GIFT-CARDS"
                    />
                </div>
                {/* <ListArticles /> */}
            </Provider>
        </div>
    )
}

