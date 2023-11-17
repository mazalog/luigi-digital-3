import React from 'react'
import Loading from './Loading'
import Button from '../components/Button'

export default function Subtotal(props) {

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
            {
                props.sectionCart === 'confirmar' ? <>
                    {
                        props.loading ? <Loading /> : <div onClick={props.sendWhatsapp} style={{ marginTop: '0px' }}>
                            <Button>
                                Finalizar Pedido
                            </Button>
                        </div>
                    }

                </> : <>
                    <div onClick={handleClick}>
                        <Button>
                            Siguiente
                        </Button>
                    </div>
                </>
            }

        </div>
    )
}
