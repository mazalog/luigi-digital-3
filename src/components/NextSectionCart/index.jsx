import Loading from '../Loading'
import React from 'react'
import Button from '../Button'

export default function NextSectionCart(props) {
    const handleClick = () => {

        if (props.sectionCart === 'pedido') {
            if (props.inCard.length !== 0) {
                props.setSectionCart('Checkout')
            } else {
                console.log('cart empty')
            }
        } else {
            props.handleSetSection('confirmar')
        }
    }
    return (
        <div >
            <div className="container-alert active"  >
                <div className={`alert oneC `}   >
                    {
                        props.sectionCart === 'confirmar' ? <>
                            {
                                props.loading ? <Loading /> : <Button onClick={props.addOrder} style={{ margin: 0 }}>
                                    Finalizar Pedido
                                </Button>
                            }

                        </> : <>
                            <Button onClick={handleClick} style={{ margin: 0 }}>
                                Siguiente
                            </Button>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}


