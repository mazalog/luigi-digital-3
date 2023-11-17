import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { uploadImg } from '../firebase/client'
import Spinner from './Loading'

function UpdateArticle(props) {


    const COMPOSE_STATES = {
        USER_NOT_KNOW: 0,
        LOADING: 1,
        SUCCESS: 2,
        ERROR: -1,
        LOADING_FORM: 10,
        NO_LOADING_FORM: 20,
    }
    const [status, setStatus] = useState(COMPOSE_STATES)
    const [task, setTask] = useState(null)
    const [imgUrl, setImgUrl] = useState([])
    const [loading, setLoading] = useState(COMPOSE_STATES.USER_NOT_KNOW)
    const [sizes, setSizes] = useState([])

    useEffect(() => {
        if (props.article.sizes) setSizes(props.article.sizes)
        if (props.article.photos) setImgUrl(props.article.photos)
        setValues(props.article)
    }, [props.article])

    useEffect(() => {
        if (task) {
            const onProgress = () => {
                setStatus(COMPOSE_STATES.LOADING)
                setLoading(COMPOSE_STATES.LOADING)
            }
            const onError = () => { }

            const onComplete = () => {
                setLoading(COMPOSE_STATES.USER_NOT_KNOW)
                setStatus(COMPOSE_STATES)
                task.snapshot.ref.getDownloadURL()
                    .then(res => {
                        setImgUrl([...imgUrl, res])
                    })
            }
            task.on('state_changed',
                onProgress,
                onError,
                onComplete
            )
        }
    }, [task])


    const handleChangeInputFile = (event) => {
        setStatus(COMPOSE_STATES.LOADING)
        const file = event.target.files[0]
        const task = uploadImg(file)
        setTask(task)
    }

    const categories = [
        'PS4',
        'PS3',
        'PS5',
        'X360',
        'XONE-XSERIES',
        'NSWITCH',
        'CONTROLES-ACCESORIOS',
        'SUSCRIPCIONES-GIFT-CARDS'
    ]

    const genders=[
        'Niños','Terror','Carreras','Shutter','Peleas','Mundo abierto','Aventuras','Deportivos'
    ]


    const [values, setValues] = useState({})


    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateArticle(values.id, {
            ...values,
            sizes: props.article.section === 'CALZADO' ? sizes.sort(function (a, b) { return a - b }) : sizes,
            cover_photo: imgUrl.length !== 0 ? imgUrl[0] : props.article.cover_photo,
            photos: imgUrl.length !== 0 ? imgUrl : props.article.photos,
        })
    }

    const addSize = () => {
        setSizes([...sizes, values.size])
    }

    const deleteImgUrl = (item) => {
        setImgUrl(imgUrl.filter(x => x !== item))
    }
    const deleteSize = (size) => {
        setSizes(sizes.filter(x => x !== size))
    }

    return (
        <div className={`container-cart-menu ${props.isUpdateArticleActivated === true ? "container-cart-menu-active" : null}`} >
            <div className={`cart-menu ${props.isUpdateArticleActivated === true ? "cart-menu-active" : null}`} >
                <div className="nav-cart">
                    <div className="buttons-cart">

                    </div>
                    <div onClick={() => props.setActive(props)} className="button-close-cart">
                        <p>X</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="cart-body">
                        <div className="container-add-inputs">
                            {
                                props.article ? <>
                                    <label className="label fff m-t-2 ">Nombre</label>
                                    <input defaultValue={props.article.product_name} className="input fff" name="product_name" onChange={handleInputChange} />

                                    <label className="label fff m-t-2">Descripción</label>
                                    <textarea defaultValue={props.article.information} className="textarea" name="information" onChange={handleInputChange} />
{/* 
                                    <label className="label fff m-t-2">Codigo</label>
                                    <input defaultValue={props.article.cod} className="input fff" name="cod" onChange={handleInputChange} />

                                    <label className="label fff m-t-2">Reputación</label>
                                    <input defaultValue={props.article.start} className="input fff" name="start" onChange={handleInputChange} /> */}

                                    <label className="label fff m-t-2" >Precio</label>
                                    <input defaultValue={props.article.price} className="input fff" name="price" onChange={handleInputChange} />
{/* 
                                    <label className="label fff m-t-2" >Precio con descuento</label>
                                    <input defaultValue={props.article.sale_price} className="input fff" name="sale_price" onChange={handleInputChange} /> */}

                                    {/* <label className="label fff m-t-2">Sección - {props.article.section}</label>
                                    <select defaultValue={props.article.section} className="select" name="section" onChange={handleInputChange}>
                                        <option value="indefinido">SELECCIONAR</option>
                                        <option value="CALZADO">CALZADO</option>
                                        <option value="ROPA">ROPA</option>
                                    </select> */}

                                    <label className="label fff m-t-2">Seccion - {props.article.gender}</label>
                                    <select defaultValue={props.article.gender} className="select" name="gender" onChange={handleInputChange}>
                                        <option value="indefinido">SELECCIONAR</option>
                                        <option value="DIGITAL">DIGITAL</option>
                                        <option value="FISICO">FISICO</option>
                                    </select>

                            <label className="label fff m-t-2">Genero - {props.article.brand}</label>
                            <select defaultValue={props.article.brand} className="select" name="brand" onChange={handleInputChange}>
                                <option value="">SELECCIONAR</option>
                                {
                                    genders.map(doc => <option key={doc} value={doc}>{doc}</option>)
                                }    
                            </select> 


                                    <label className="label fff m-t-2">Categoria - {props.article.section}</label>
                                    <select defaultValue={props.article.section} className="select" name="section" onChange={handleInputChange}>
                                        <option value="indefinido">SELECCIONAR</option>
                                        {
                                            categories.map(doc => <option key={doc} value={doc}>{doc}</option>)
                                        }
                                    </select>

                                    {/* <label className="label fff m-t-2" >Tallas</label>
                                    <input className="input fff" name="size" onChange={handleInputChange} onDragEnter={() => console.log('hola')} />
                                    <p className="btn" onClick={addSize} style={{ marginTop: '20px' }} >Agregar</p>
                                    <p>Actuales</p>
                                    <ul className="list-sizes">
                                        {
                                            props.article.sizes ? <>
                                                {
                                                    sizes.sort(function (a, b) { return a - b }).map((item, index) => <section className="remove-img">
                                                        <button type="button" onClick={() => deleteSize(item)} className="btn-remove-size">x</button>
                                                        <li key={index}>{item}</li></section>)

                                                }
                                            </> : <></>
                                        }
                                    </ul> */}

                                    <div className="m-t-2">
                                        <label className="archive" style={{ marginBottom: '10px' }}>Imagenes
                                            <input className="input-file" type="file" onChange={handleChangeInputFile} /></label>
                                        {loading === COMPOSE_STATES.LOADING ? <div><Spinner /> </div> : <div className="container-add-images">
                                            {imgUrl.map((image, index) =>
                                                <section className="remove-img">
                                                    <button className="btn-add-file" onClick={() => deleteImgUrl(image)}>x</button>
                                                    <img
                                                        key={index}
                                                        src={image}
                                                        className="add-img"
                                                        loading="lazy"
                                                        alt=""
                                                    />
                                                </section>

                                            )}

                                        </div>}
                                    </div>
                                </> : <></>
                            }

                        </div>
                    </div>

                    <div className="cart-menu-subtotal">
                        <div className="m-t-2">
                            <p style={{ margin: '2px', fontWeight: '700', color: '#1f1d26' }}>{props.message}</p>
                            {
                                loading === COMPOSE_STATES.LOADING || props.loadingPost ? <div> <Spinner /> </div> : <button type="submit" className="btn">Modificar Articulo</button>
                            }
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isUpdateArticleActivated: state.isUpdateArticleActivated,
        article: state.article
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "UPDATE_ARTICLE_ACTIVE", status: !(props.isUpdateArticleActivated), article: props.article })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateArticle)
