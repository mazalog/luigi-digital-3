import React from 'react'
import { connect } from 'react-redux'

function CartMenuItem(props) {
    
    return (
        <div className="cart-menu-item">
            <div className="cart-menu-item-photo">
                <img loading="lazy" src={!props.item.image?'https://firebasestorage.googleapis.com/v0/b/panaobrero.appspot.com/o/luigidigital%2FIMGDEFAULT-min.png?alt=media&token=a6ab7f1a-7d35-42bb-920d-4dc495ceb811':props.item.image} style={{ width: "100%", borderRadius: '10px' }} alt={props.item.model}></img>
            </div>
            <div className="cart-menu-item-details">
                <span className="cart-menu-item-title">{props.item.brand}</span>
                <span className="cart-menu-item-details-text">{props.item.model}</span>
                <span className="cart-menu-item-details-text">Cantidad: {props.item.piece}</span>
                {/* <span className="cart-menu-item-details-text">Talla: {props.item.size}</span> */}
            </div>
            <div className="cart-menu-item-right">
                <span className="cart-menu-item-price">${props.item.price}</span>
                <div className="cart-menu-item-buttons">
                    <button className="cart-menu-item-button" onClick={() => { props.decreasePiece(props) }}>-</button>
                    <button className="cart-menu-item-button" onClick={() => { props.increasePiece(props) }}>+</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increasePiece: (props) => {
            dispatch({ type: "INCREMENT_ITEM_PIECE", item: props.item })
        },
        decreasePiece: (props) => {
            dispatch({ type: "DECREMENT_ITEM_PIECE", item: props.item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartMenuItem)