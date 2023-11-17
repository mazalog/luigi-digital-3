import React, { useState } from "react";
import styles from "./detail.module.scss";
import Layout from "../../components/Layout";
import { Provider } from "react-redux";
import store from "../../redux/store";
import AddCart from '../../components/AddCart'
import useArticlesForId from "../../hooks/useArticleForId";
import Spinner from "../../components/Spinner";
import { Helmet } from "react-helmet";
// import useRelatedProducts from "src/hooks/useRelatedProducts";

export default function ProductDetailPage({ params }) {

    const [selectedSize, setSelectedSize] = useState();
    const [selectedPhoto, setSelectedPhoto] = useState(0);

    const id = decodeURI(params.id.toUpperCase())


    const { article, loading } = useArticlesForId(id)

    // const { recommendations: relatedProducts } = useRelatedProducts(params.id)

    const {
        brand,
        information,
        photos,
        price,
        product_name,
        sale_price,
        sizes,
        section,
    } = article

    return (
        <Provider store={store}>
            {
                loading ? <></> : <Helmet>
                    <title>{product_name}</title>
                    <meta property="og:title" content={product_name}/>
                        <meta property="og:description" content={information}/>
                            <meta property="og:url" content={`https://www.luigi-digital.com/article/${params.id}`}/>
                                <meta property="og:image" content={photos[selectedPhoto]}/>
                                    <meta property="product:brand" content={section}/>
                                        <meta property="product:availability" content="in stock"/>
                                            <meta property="product:condition" content="new"/>
                                                <meta property="product:price:amount" content={price.toFixed(2)}/>
                                                    <meta property="product:price:currency" content="USD"/>
                                                        <meta property="product:retailer_item_id" content={params.id}/>
                                                            {/* <meta property="product:item_group_id" content="fb_tshirts"></meta> */}
                                                            <meta name="description" content={information} />
                                                        </Helmet>
            }

                                                        <Layout bgSearch noCategories noAlert >
                                                            {
                                                                loading ? <div className="container-spinner"> <Spinner /></div> : <>
                                                                    <div className={styles.container}>
                                                                        <main className={styles.main}>
                                                                            <div className={styles.header}>
                                                                                <span className={styles.savedText}>
                                                                                    {
                                                                                        sale_price === 0 ? <></> : <> {"(Ahorra " + (price - sale_price) + "$!)"}</>
                                                                                    }
                                                                                </span>
                                                                                <div >
                                                                                    <a>{brand || ""}</a>
                                                                                </div>
                                                                                <h1 className={styles.productTitle}>{product_name || ""}</h1>
                                                                            </div>

                                                                            <div className={styles.photosContainer}>

                                                                                <div className={styles.carouselContainer}>
                                                                                    <img src={photos.length !== 0 ? photos[selectedPhoto] : 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FIMGDEFAULT-min.png?alt=media&token=a6ab7f1a-7d35-42bb-920d-4dc495ceb811'} loading="lazy" alt="" />
                                                                                </div>
                                                                                <div className={styles.container_name_price}>
                                                                                    <h2>Precio:</h2>
                                                                                    {
                                                                                        sale_price === 0 ? <></> : <span className={styles.priceText}>${price || 0}.00</span>
                                                                                    }

                                                                                    <div className={styles.saleContainer}>
                                                                                        <span className={styles.saleText}>{sale_price === 0 ? <>{price}</> : <>{sale_price}</>}.00$</span>
                                                                                        <span className={styles.savedText}>
                                                                                            {
                                                                                                sale_price === 0 ? <></> : <> {"(Ahorra " + (price - sale_price) + "$!)"}</>
                                                                                            }
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                {/* <div className={styles.smallPhotos}>

                                        {photos.map((image, index) => {
                                            return (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    className={styles.smallPhoto}
                                                    style={{ borderColor: selectedPhoto === index && "black", marginLeft: `${index === 0 ? '70px' : '4px'}` }}
                                                    onClick={() => setSelectedPhoto(index)}
                                                    loading="lazy"
                                                    alt={index}
                                                />
                                            );
                                        })}
                                    </div> */}
                                                                            </div>
                                                                            <div className={styles.productInfos}>
                                                                                <div className={styles.header}>
                                                                                    <div>
                                                                                        <a>{brand || ""}</a>
                                                                                    </div>

                                                                                    <h1 className={styles.productTitle}>{product_name || ""}</h1>
                                                                                </div>
                                                                                {/* <div className={styles.sizes}>
                                        <h4 className={styles.sizesText}>Tallas</h4>
                                        {sizes.map((size) => {
                                            return (
                                                <button
                                                    key={size}
                                                    className={styles.sizeButton}
                                                    style={{
                                                        borderColor: selectedSize === size && "black",
                                                        fontWeight: selectedSize === size && "bold",
                                                        textTransform: 'uppercase'
                                                    }}
                                                    onClick={() => setSelectedSize(size)}
                                                >
                                                    {size}
                                                </button>
                                            );
                                        })}
                                    </div> */}
                                                                                <div className={styles.infoContainer}>
                                                                                    <h4 className={styles.sizesText}>Información del juego</h4>
                                                                                    <p className={styles.infoText}>{information}</p>
                                                                                </div>
                                                                            </div>
                                                                        </main>
                                                                    </div>
                                                                </>
                                                            }

                                                            <AddCart
                                                                item={article}
                                                                selectedSize={selectedSize}
                                                                selectedPhoto={selectedPhoto}
                                                            />
                                                        </Layout>
                                                    </Provider>

                                                    );
}
