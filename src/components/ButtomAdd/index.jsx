import React from 'react'
import { connect } from 'react-redux'


 function ButtomAdd (props){
    
    const handleAddToCartClick = () => {
        props.addItem(props)
    }
    return(
        <button className={props.styles.add} onClick={()=>handleAddToCartClick()} >+</button>
    )
}


const mapStateToProps = (state) => {
    return {
        inCard: state.inCard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (props) => {
            const test = props.inCard.filter(x => x.id === props.item.id)
            const customSize = props.selectedSize ? props.selectedSize : 'Por definir'
            if (test.length !== 0) {
                const a = test.find(x => x.id === props.item.id
                    && x.size === customSize
                    && x.image === props.item.photos[props.selectedPhoto])

                if (a) {
                    dispatch({
                        type: "INCREMENT_ITEM_PIECE", item: {
                            id: props.item.id,
                            piece: 1,
                            image: props.item.photos[props.selectedPhoto],
                            size: props.selectedSize ? props.selectedSize : 'Por definir',
                        }
                    })
                } else {
                    dispatch({
                        type: "ADD_LIST", item:
                        {
                            id: props.item.id,
                            brand: props.item.product_name,
                            cod: props.item.cod,
                            price: props.item.sale_price !== 0 ? props.item.sale_price : props.item.price,
                            image: props.item.photos[props.selectedPhoto],
                            piece: 1,
                            size: props.selectedSize ? props.selectedSize : 'Por definir',
                            photo: props.selectedPhoto
                        }
                    })
                }
            } else {
                dispatch({
                    type: "ADD_LIST", item:
                    {
                        id: props.item.id,
                        brand: props.item.product_name,
                        cod: props.item.cod,
                        price: props.item.sale_price !== 0 ? props.item.sale_price : props.item.price,
                        image: props.item.photos[props.selectedPhoto],
                        piece: 1,
                        size: props.item.section,
                        photo: props.selectedPhoto
                    }
                })
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtomAdd)
