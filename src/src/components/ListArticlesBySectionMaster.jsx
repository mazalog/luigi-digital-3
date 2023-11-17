import React, { useState } from 'react'
import AddArticle from './AddArticle'
import CardMaster from "./CardMaster"
import { connect } from 'react-redux'
import UpdateArticle from './UpdateArticle'
import Spinner from './Loading'
import SearchInput from './SearchInput'
import useArticlesForCategory from 'src/hooks/useArticlesForCategory'

function ListArticlesBySectionMaster({ section, ...props }) {

    const { articles, updateArticle, deleteArticle, createArticle, loading, loadingPost, message } = useArticlesForCategory(section)

    const activeUpdateArticle = (object) => {
        props.setActiveUpdate({ ...props, object })
    }

    const [search, setSearch] = useState(false)

    const handleInputChange = (e) => {
        if (e.target.value === "") {
            setSearch(false)
        } else {
            setSearch(String(e.target.value).toUpperCase())
        }
    }


    return (
        <>
            <div className="container-master">
                <p className="subtitle-master">Articulos</p>
                <div className="container-orders">
                    {
                        loading ? <div>
                            <Spinner />
                        </div> : <div>
                            <div className="add-article" onClick={() => props.setActive(props)}><span>Agregar Articulo +</span></div>

                            <div style={{ marginTop: "1rem" }} >
                                <SearchInput onChange={handleInputChange} />
                            </div>
                            <div className="container-articles-master">

                                {
                                    articles.map(doc => <>

                                        {
                                            search ? <>
                                                {
                                                    doc.product_name.toUpperCase().includes(search.replace(/\b\w/g, l => l.toUpperCase())) ?
                                                        <div key={doc.id} className="card-container master border">
                                                            <CardMaster
                                                                id={doc.id}
                                                                section={doc.section}
                                                                product_name={doc.product_name}
                                                                price={doc.price}
                                                                sale_price={doc.sale_price}
                                                                cover_photo={doc.cover_photo}
                                                                cod={doc.cod}
                                                                start={doc.start}
                                                                gender={doc.gender}
                                                                photos={doc.photos}
                                                                information={doc.information}
                                                                sizes={doc.sizes}
                                                                brand={doc.brand}
                                                                activeUpdateArticle={activeUpdateArticle}
                                                                deleteArticle={deleteArticle}
                                                            /></div> : <></>
                                                }
                                            </> : <>
                                                <div key={doc.id} className="card-container master border">
                                                    <CardMaster
                                                        id={doc.id}
                                                        section={doc.section}
                                                        product_name={doc.product_name}
                                                        price={doc.price}
                                                        sale_price={doc.sale_price}
                                                        cover_photo={doc.cover_photo}
                                                        cod={doc.cod}
                                                        start={doc.start}
                                                        gender={doc.gender}
                                                        photos={doc.photos}
                                                        information={doc.information}
                                                        sizes={doc.sizes}
                                                        brand={doc.brand}
                                                        activeUpdateArticle={activeUpdateArticle}
                                                        deleteArticle={deleteArticle}
                                                    /></div>
                                            </>
                                        }
                                    </>)
                                }

                            </div>

                        </div>

                    }
                </div>
            </div>
            <AddArticle createArticle={createArticle} loadingPost={loadingPost} message={message} />
            <UpdateArticle updateArticle={updateArticle} loadingPost={loadingPost} message={message} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAddArticleActivated: state.isAddArticleActivated,
        isUpdateArticleActivated: state.isUpdateArticleActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "ADD_ARTICLE_ACTIVE", status: !(props.isAddArticleActivated) })
        },
        setActiveUpdate: (props) => {
            dispatch({ article: props.object, type: "UPDATE_ARTICLE_ACTIVE", status: !(props.isUpdateArticleActivated), object: props.obe })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListArticlesBySectionMaster)