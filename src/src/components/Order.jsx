import React from 'react'
import CartMenuItem from './CartMenuItem'

export default function Order(props) {

    return (<>
        {(props.inCard.length === 0) ?
            (
                <div style={{ marginTop: '30px',color:'#fff' }}>Cesta vacia</div>
            )
            :
            (
                <div className="cart-menu-items">

                    {
                        props.inCard.map(item => {
                            return (
                                <CartMenuItem key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            )
        }
    </>
    )
}