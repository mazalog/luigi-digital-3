import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import Products from './HomeProducts/index'
import VerticalCard from './HomeCard/vertical-card'

function Items(props) {

    const [articles, setArticles] = useState(props.articles.sort((a, b) => {
        return b.price - a.price
    }))
    const [typeGame, setTypeGame] = useState('')

    const handleSelectChange = (e) => {
        setTypeGame(e.target.value)
    }

    const standars = [
        'Preventa', 'Estreno', 'Populares', 'Estandar'
    ]

    const calculePriceForStandar = (doc) => {
        switch (doc) {
            case 'Preventa':
                return `${doc} $10`
            case 'Estreno':
                return `${doc} $10`
            case 'Populares':
                return `${doc} $8`
            case 'Estandar':
                return `${doc} $5`
            default:
                return ''
        }
    }

    useEffect(() => {
        if (props.gender) {
            setArticles(props.articles.filter(item => item.gender === props.gender.toUpperCase()))
        } else {
            props.updateGender('FISICO')
            setArticles(props.articles)
        }
    }, [props.articles])

    useEffect(() => {
        if (props.gender.length !== 0) setArticles(props.articles.filter(item => item.gender === props.gender.toUpperCase()))
    }, [props.gender])

    if (props.loading) return <div className="container-spinner"><Spinner /></div>

    return (
        <>

        
            {
                props.gender === 'DIGITAL' ? <>

                    {
                        props.title === 'XONE-XSERIES' ? <>
                            <div className="filters" style={{ marginTop: '10px' }}>
                                <div className="container-select-categorie">
                                    <select className="select-categorie" onChange={handleSelectChange}>
                                        <option value="">Selecciona tipo de juego</option>
                                        {
                                            standars.map(doc => <option value={doc} key={doc}>{calculePriceForStandar(doc)}</option>)
                                        }
                                    </select>
                                </div>
                            </div>

                        </> : <></>
                    }

                </> : <></>
            }

            <div style={{ marginBottom: '40px' }} >
                <div className="items-container" >
                    {
                        articles.length === 0 ? <p className="no-found "> <span> LuigiDigital no ha encontrado tu busqueda </span></p> :
                            <div>
                                {props.gender === 'DIGITAL' ?
                                    <h5 style={{ fontSize: '17px' }}>{props.title}</h5>
                                    : <></>}

                                {
                                    props.title === 'XONE-XSERIES' ?
                                        <>

                                            {
                                                props.gender === 'DIGITAL' ?
                                                    <>
                                                        {
                                                            typeGame.length === 0 ? <>
                                                                {standars.map((doc, index) =>
                                                                    articles.some(item => item.cod === doc) ?
                                                                        <>{console.log(articles.reverse())}
                                                                            <h5 className="categorie">{calculePriceForStandar(doc)}</h5>
                                                                            {doc==='Estandar'?<>
                                                                            {articles.reverse().map(item =>
                                                                                item.cod === doc ?
                                                                                    <VerticalCard
                                                                                        bgColor="#f6f6f6s"
                                                                                        image={item.cover_photo === 'undefined' ? 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FIMGDEFAULT-min.png?alt=media&token=a6ab7f1a-7d35-42bb-920d-4dc495ceb811' : item.cover_photo}
                                                                                        href={`/article/${item.id}`}
                                                                                        gender={item.gender}
                                                                                        name={item.product_name}
                                                                                        section={item.section}
                                                                                        price={item.price}
                                                                                        position={index}
                                                                                        item={item}
                                                                                        sale_price={item.sale_price}
                                                                                        start={item.start}
                                                                                    />
                                                                                    : <></>
                                                                            )}
                                                                            
                                                                            </>:<>
                                                                            {articles.map(item =>
                                                                                item.cod === doc ?
                                                                                    <VerticalCard
                                                                                        bgColor="#f6f6f6s"
                                                                                        image={item.cover_photo === 'undefined' ? 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FIMGDEFAULT-min.png?alt=media&token=a6ab7f1a-7d35-42bb-920d-4dc495ceb811' : item.cover_photo}
                                                                                        href={`/article/${item.id}`}
                                                                                        gender={item.gender}
                                                                                        name={item.product_name}
                                                                                        section={item.section}
                                                                                        price={item.price}
                                                                                        position={index}
                                                                                        item={item}
                                                                                        sale_price={item.sale_price}
                                                                                        start={item.start}
                                                                                    />
                                                                                    : <></>
                                                                            )}
                                                                            </>}

                                                                        </> : '')
                                                                }
                                                            </> : <>

                                                                {
                                                                    articles.some(item => item.cod === typeGame) ?
                                                                        <>
                                                                            <h5 className="categorie">{typeGame}</h5>
                                                                            {articles.map(item =>
                                                                                item.cod === typeGame ?
                                                                                    <>
                                                                                        <VerticalCard
                                                                                            bgColor="#f6f6f6s"
                                                                                            image={item.cover_photo === 'undefined' ? 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FIMGDEFAULT-min.png?alt=media&token=a6ab7f1a-7d35-42bb-920d-4dc495ceb811' : item.cover_photo}
                                                                                            href={`/article/${item.id}`}
                                                                                            gender={item.gender}
                                                                                            name={item.product_name}
                                                                                            section={item.section}
                                                                                            price={item.price}
                                                                                            item={item}
                                                                                            sale_price={item.sale_price}
                                                                                            start={item.start}
                                                                                        />
                                                                                    </>
                                                                                    : <></>
                                                                            )}
                                                                        </> : <></>
                                                                }
                                                            </>
                                                        }

                                                    </>
                                                    :
                                                    <Products gender={props.gender}>
                                                        {articles.map((item, index) =>
                                                            <>
                                                                <VerticalCard
                                                                    bgColor="#f6f6f6"
                                                                    image={item.cover_photo === 'undefined' ? 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FIMGDEFAULT-min.png?alt=media&token=a6ab7f1a-7d35-42bb-920d-4dc495ceb811' : item.cover_photo}
                                                                    href={`/article/${item.id}`}
                                                                    gender={item.gender}
                                                                    name={item.product_name}
                                                                    section={item.section}
                                                                    price={item.price}
                                                                    position={index}
                                                                    item={item}
                                                                    sale_price={item.sale_price}
                                                                    start={item.start}
                                                                />
                                                            </>
                                                        )}
                                                    </Products>
                                            }

                                        </>
                                        :
                                        <>
                                            <Products gender={props.gender}>
                                                {articles.map((item, index) =>
                                                    <>
                                                        <VerticalCard
                                                            bgColor="#f6f6f6"
                                                            image={item.cover_photo === 'undefined' ? 'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FIMGDEFAULT-min.png?alt=media&token=a6ab7f1a-7d35-42bb-920d-4dc495ceb811' : item.cover_photo}
                                                            href={`/article/${item.id}`}
                                                            gender={item.gender}
                                                            name={item.product_name}
                                                            section={item.section}
                                                            price={item.price}
                                                            position={index}
                                                            item={item}
                                                            sale_price={item.sale_price}
                                                            start={item.start}
                                                        />
                                                    </>
                                                )}
                                            </Products>
                                        </>
                                }

                            </div>

                    }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        inCard: state.inCard,
        gender: state.gender,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "CART_MENU_ACTIVE", status: !(props.isCartMenuActivated) })
        },
        setCart: () => {
            dispatch({ type: "CLEAR_CART" })
        },
        updateGender: (f) => {
            dispatch({ type: "UPDATE_GENDER", item: f })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
