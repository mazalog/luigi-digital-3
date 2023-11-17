import React, { useEffect, useState } from 'react'
import Items from './Items'
import { connect } from 'react-redux'
import { useLocation } from 'wouter'

function ShoppingPage(props) {

    const [articles, setArticles] = useState(props.articles)

    const [location] = useLocation()

    useEffect(() => {
        setArticles(props.articles)
    }, [props.articles])

    useEffect(() => {
        if (props.filters.length !== 0){
             setArticles(props.articles.filter(item => item.brand === props.filters))
        }else{
        setArticles(props.articles)
        }
    }, [props.filters])

    useEffect(() => {
        props.ClearFilter()
        setArticles(props.articles)
    }, [location])

    return (
        <div className="shopping-page" onClick={() => { props.setDeactive(props) }}>
            <Items filter={props.filters} title={props.title} articles={articles} loading={props.loading} />
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setDeactive: (props) => {
            if (props.isCartMenuActivated)
                dispatch({ type: "CART_MENU_ACTIVE", status: false })
        },
        ClearFilter: () => {
            dispatch({ type: "UPDATE_FILTER", item: '' })
            dispatch({ type: "UPDATE_GENDER", item: '' })
        }

    }
}
const mapStateToProps = state => {
    return {
        inCard: state.inCard,
        filters: state.filters,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage)