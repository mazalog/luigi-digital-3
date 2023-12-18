import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { uploadImg } from '../firebase/client'
import Spinner from './Loading'
// import Button from '../components/Button'


function AddArticle(props) {

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



    const categories = [
        'PS4',
        'PS3',
        'PS5',
        'X360',
        'XONE-XSERIES',
        'NSWITCH',
        'CONTROLES-ACCESORIOS',
        'SUSCRIPCIONES-GIFT-CARDS',
        'JRETRO',
        'NSWITCHF',
        'PRODUCTOSCHINOS',
        'CONSOLAS',
        'FUNKOS',
        'ALQUILER',
        'ALQUILER-PS'
    ]

    const genders = [
        'Niños', 'Terror', 'Carreras', 'Shutter', 'Peleas', 'Mundo abierto', 'Aventuras', 'Deportivos', 'Preventa', 'Estreno', 'Populares', 'Estandar'
    ]
    const standars = [
        'Preventa', 'Estreno', 'Populares', 'Estandar'
    ]

    const initialValues = {
        product_name: "",
        information: "",
        price: 0,
        sale_price: 0,
        cover_photo: String(imgUrl[0]),
        photos: imgUrl,
        cod: '',
        sizes: sizes,
        section: '',
        gender: '',
        start: 0,
        size: '',
        brand: '',
    }
    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (event) => {
        event.target.reset()
        event.preventDefault()
        props.createArticle({ ...values, cover_photo: String(imgUrl[0]), photos: imgUrl, sizes: sizes, })

    }

    const handleChangeInputFile = (event) => {
        setStatus(COMPOSE_STATES.LOADING)
        const file = event.target.files[0]
        const task = uploadImg(file)
        setTask(task)
    }

    const addSize = () => {
        setSizes([...sizes, values.size])
    }

    const deleteImgUrl = (item) => {
        setImgUrl(imgUrl.filter(x => x !== item))
    }


    return (
        <div className={`container-cart-menu ${props.isAddArticleActivated === true ? "container-cart-menu-active" : null}`} >
            <div className={`cart-menu ${props.isAddArticleActivated === true ? "cart-menu-active" : null}`} >
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
                            <label className="label fff m-t-2 ">Nombre</label>
                            <input className="input fff" name="product_name" onChange={handleInputChange} required />

                            <label className="label fff m-t-2">Descripción</label>
                            <textarea className="textarea" name="information" onChange={handleInputChange} required />



                            {/* <label className="label fff m-t-2">Reputación</label> */}
                            {/* <input className="input fff" name="start" value="0" type="hidden" onChange={handleInputChange} required /> */}



                            {/* <label className="label fff m-t-2" >Precio con descuento</label> */}
                            <input type="hidden" value="0" className="input fff" name="sale_price" onChange={handleInputChange} required />
                            <label className="label fff m-t-2">Sección</label>
                            <select className="select" name="gender" onChange={handleInputChange}>
                                <option value="indefinido">SELECCIONAR</option>
                                <option value="DIGITAL">DIGITAL</option>
                                <option value="FISICO">FISICO</option>
                                <option value="NO">NO ES UN JUEGO</option>
                            </select>


                            <label className="label fff m-t-2">Genero</label>
                            <select className="select" name="brand" onChange={handleInputChange}>
                                <option value="">SELECCIONAR</option>
                                {
                                    genders.map(doc => <option key={doc} value={doc}>{doc}</option>)
                                }
                            </select>

                            <label className="label fff m-t-2">Categoria</label>
                            <select className="select" name="section" onChange={handleInputChange}>
                                <option value="indefinido">SELECCIONAR</option>
                                {
                                    categories.map(doc => <option key={doc} value={doc}>{doc}</option>)
                                }
                            </select>

                            <label className="label fff m-t-2" >Precio</label>
                            <input type="number" className="input fff" name="price" onChange={handleInputChange} required />

                            {
                                values.section === 'ALQUILER' && <>
                                    <label className="label fff m-t-2" >Precio codigo</label>
                                    <input type="number" className="input fff" name="cod" onChange={handleInputChange} required />
                                    <label className="label fff m-t-2" >Precio cuenta principal</label>
                                    <input type="number" className="input fff" name="sale_price" onChange={handleInputChange} required />
                                </>
                            }

                            {
                                values.section === 'XONE-XSERIES' ? <>
                                    {
                                        values.gender === 'DIGITAL' ? <>
                                            <label className="label fff m-t-2">Tipo de Juego</label>
                                            <select className="select" name="cod" onChange={handleInputChange}>
                                                <option value="indefinido">SELECCIONAR</option>
                                                {
                                                    standars.map(doc => <option key={doc} value={doc}>{doc}</option>)
                                                }
                                            </select>
                                        </> : <></>
                                    }

                                </> : <></>
                            }


                            {
                                values.section === 'NSWITCH' ? <>
                                    {
                                        values.gender === 'DIGITAL' ? <>
                                            <label className="label fff m-t-2">Tipo de Juego</label>
                                            <select className="select" name="cod" onChange={handleInputChange}>
                                                <option value="indefinido">SELECCIONAR</option>
                                                {
                                                    standars.map(doc => <option key={doc} value={doc}>{doc}</option>)
                                                }
                                            </select>
                                        </> : <></>
                                    }

                                </> : <></>
                            }

                            {
                                values.section === 'ALQUILER' ? <>
                                    {
                                        values.gender === 'DIGITAL' ? <>
                                            <label className="label fff m-t-2">Tipo de Juego</label>
                                            <select className="select" name="cod" onChange={handleInputChange}>
                                                <option value="indefinido">SELECCIONAR</option>
                                                {
                                                    standars.map(doc => <option key={doc} value={doc}>{doc}</option>)
                                                }
                                            </select>
                                        </> : <></>
                                    }

                                </> : <></>
                            }



                            {/* <label className="label fff m-t-2" >Tallas</label>
                            <input className="input fff" name="size" onChange={handleInputChange} required />
                            <p className="btn" onClick={addSize} style={{ marginTop: '20px' }} >Agregar</p>
                            <ul className="list-sizes">
                                {
                                    sizes.map((item, index) => <li key={index}>{item}</li>)
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
                                    {/* {imgUrl && <section className="remove-img">
                                        <button className="btn-add-file" onClick={() => setImgUrl(null)}>x</button>
                                        <img loading="lazy" className="add-img" alt="Imagen" src={imgUrl} />
                                    </section>} */}
                                </div>}
                            </div>
                        </div>
                    </div>

                    <div className="cart-menu-subtotal">
                        <div className="m-t-2">
                            <p style={{ margin: '2px', fontWeight: '700', color: '#1f1d26' }}>{props.message}</p>
                            {
                                loading === COMPOSE_STATES.LOADING || props.loadingPost ? <div> <Spinner /> </div> : <button type="submit" className="btn">Agregar Articulo</button>
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
        isAddArticleActivated: state.isAddArticleActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "ADD_ARTICLE_ACTIVE", status: !(props.isAddArticleActivated) })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle)
