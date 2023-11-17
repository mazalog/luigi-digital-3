import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Checkout from '../Checkout'
import ConfirmOrder from '../ConfirmOrder'
import Order from '../Order'
// import Subtotal from '../Subtotal'
import SucessOrder from '../SucessOrder'
import styles from './cart-body.module.scss'
import NextSectionCart from "../NextSectionCart";
import orderService from '../../services/orders'
import useZonesDelivery from "../../hooks/useZonesDelivery";

function CartBody(props) {

    const [sectionCart, setSectionCart] = useState('pedido')
    const [typeOrder, setTypeOrder] = useState('recoger')
    const [action, setAction] = useState({})
    const [loading, setLoading] = useState(false)
    const { zones } = useZonesDelivery()
    // const zones = [{ addres: 'Altamira, Chacao, Los Palos Grandes', price: 2 },
    // { addres: 'Baruta, Plaza Venezuela, Centro', price: 3 },
    // { addres: 'Montalban, Paraiso', price: 4 }]

    const initialValues = {
        nombre: '',
        telefono: '',
        direccion: '',
        casa: '',
        localidad: '',
        metodoPago: '',
    }

    const [values, setValues] = useState(initialValues)

    useEffect(() => {
        const valuesInStorage = localStorage.getItem('valuesInput')
        if (valuesInStorage) {
            setValues(JSON.parse(valuesInStorage))
        }
    }, [])


    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSetSection = (r) => {

        if (sectionCart === 'pedido') {
            if (props.inCard.length !== 0) {
                setSectionCart('Checkout')
            }
        } else if (sectionCart === "Checkout") {
            if (r !== 'confirmar') {
                setSectionCart('pedido')
            } else {
                if (typeOrder === 'delivery') {
                    if (values.nombre === '') return setAction({ error: 'Complete el campo.' })
                    if (values.telefono === '') return setAction({ error: 'Complete el campo.' })
                    if (values.direccion === '') return setAction({ error: 'Complete el campo.' })
                    if (values.casa === '') return setAction({ error: 'Complete el campo.' })
                    if (values.localidad === '') return setAction({ error: 'Complete el campo.' })
                    if (values.metodoPago === '') return setAction({ error: 'Complete el campo.' })
                } else {
                    if (values.nombre === '') return setAction({ error: 'Complete el campo.' })
                    if (values.telefono === '') return setAction({ error: 'Complete el campo.' })
                    if (values.metodoPago === '') return setAction({ error: 'Complete el campo.' })
                }
                setSectionCart('confirmar')
            }

        } else if (sectionCart === 'confirmar') {
            setSectionCart(r)
        } else if (setSectionCart === 'successOrder') {

        }
    }

    const subTotal = Object.values(props.inCard).reduce(
        (acc, { piece, price }) => acc + piece * parseFloat(price), 0
    )
    const sendWhatsapp = () => {

        const total = subTotal + (typeOrder === 'delivery' ? zones.find(zone => zone.addres === values.localidad).price : 0)

        const priceDelivery = typeOrder === 'delivery' ? zones.find(zone => zone.addres === values.localidad).price : 0
        console.log(props.inCard)
        const cart = []
        props.inCard.forEach((doc) => {
            cart.push(
                JSON.stringify(
                    `${doc.brand} - ${doc.size}- $${doc.price} x ${doc.piece}p%0A`
                ).replace(/['"]+/g, '')
            )
        })


        window.open(`https://api.whatsapp.com/send?phone=+5804124010740&text=Nombre:+${values.nombre}
         %0A+Items+del+pedido:%0A${cart.toString()}+%0A
            Tipo+de+compra:+${typeOrder === 'delivery' ? 'Delivery' :
                'Digital+o+Recoger+personalmente'}%0A${typeOrder === 'delivery' ? ('Dirección+de+entrega:+' + values.direccion +
                    '%0ANumero+Apartamento/Casa+etc:+' + values.casa +
                    '%0ALocalidad:+' + values.localidad + '%0ASubtotal:+$' + subTotal + `%0ACosto+delivery:+$${priceDelivery}`) : ''}%0A
                    %0ATotal:+$${total.toFixed(2)}
                    %0AMetodo+de+Pago:+${values.metodoPago}
            `)
    }


    const addOrder = () => {

        setLoading(true)
        const total = subTotal + (typeOrder === 'delivery' ? zones.find(zone => zone.addres === values.localidad).price : 0)

        const orderObject = {
            nombre: values.nombre,
            telefono: values.telefono,
            tipo: typeOrder,
            direccion: values.direccion,
            casa: values.casa,
            localidad: values.localidad,
            metodoPago: values.metodoPago,
            precioDelivery: typeOrder === 'delivery' ? zones.find(zone => zone.addres === values.localidad).price : 0,
            pedido: props.inCard,
            subtotal: subTotal,
            total: total.toFixed(2),
        }
        orderService.create(orderObject)
            .then((returnedOrder) => {
                setLoading(false)
                setSectionCart('order')
                // setAction(returnedOrder)
                localStorage.setItem('valuesInput', JSON.stringify({
                    nombre: values.nombre,
                    telefono: values.telefono,
                    direccion: values.direccion,
                    casa: values.casa,
                    localidad: values.localidad,
                    metodoPago: '',
                }))
                props.setCart()
                sendWhatsapp()
            })

    }
    const updateSectionCart = () => {
        if (sectionCart !== 'successOrder') {
            props.setActive(props)
        } else {
            setSectionCart('pedido')
            props.setActive(props)
        }
    }
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}> {subTotal}$ en cesta</h1>
                <h4>Tienes {props.inCard.length}   articulos en cesta</h4>
                <div className={styles.containerButton}>
                </div>
            </div>
            <div className="cart-body">
                {
                    sectionCart === 'pedido' ?
                        <Order
                            inCard={props.inCard} />
                        : sectionCart === 'Checkout' ?
                            <Checkout
                                values={values}
                                typeOrder={typeOrder}
                                zones={zones}
                                setTypeOrder={setTypeOrder}
                                handleInputChange={handleInputChange} />
                            : sectionCart === 'confirmar' ?
                                <ConfirmOrder
                                    inCard={props.inCard}
                                    typeOrder={typeOrder}
                                    values={values}
                                    zones={zones}
                                />
                                : sectionCart === 'successOrder' ?
                                    <SucessOrder
                                        action={action}
                                    // sendWhatsapp={sendWhatsapp}
                                    />
                                    : <></>
                }
            </div>
            <NextSectionCart
                handleSetSection={handleSetSection}
                setSectionCart={setSectionCart}
                sectionCart={sectionCart}
                addOrder={addOrder}
                loading={loading}
                inCard={props.inCard}
            />


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
        setActive: (props) => {
            dispatch({ type: "CART_MENU_ACTIVE", status: !(props.isCartMenuActivated) })
        },
        setCart: () => {
            dispatch({ type: "CLEAR_CART" })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartBody)

