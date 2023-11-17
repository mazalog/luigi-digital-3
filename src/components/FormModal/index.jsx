import React, { useState } from 'react'
import Button from "../Button";
import Loading from '../Loading';
import clientsService from '../../services/clients'
import { useLocation } from 'wouter';

export default function FormModal({ addUser }) {

    const [values, setValues] = useState({ name: '', email: '', phone: '' })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    const [, navigate] = useLocation()

    const createClient = (object) => {
        setLoading(true)
        clientsService
            .create(object)
            .then((response) => {
                setMessage('Exito, Estate atento a nuestras super promociones')
                setLoading(false)
                localStorage.setItem('vali', true)
            })
            .catch(() => {
                setLoading(false)
                setMessage('Error inesperado, intenta de nuevo')
            })
    }

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.target.reset()
        e.preventDefault()
        createClient(values)
    }

    if (loading) return <Loading />

    return (
        <div>

            {
                message ? <div><h3 className="succes-suscrip">{message}</h3>
                    <Button onClick={addUser}>Cerrar</Button></div> : <form onSubmit={onSubmit}>
                    <label className="label" style={{ fontSize: '12px' }}>Nombre</label>
                    <input
                        name="name"
                        className="input"
                        style={{ width: '97%' }}
                        onChange={handleInputChange}

                        required
                    />
                    <label className="label" style={{ fontSize: '12px' }}>Correo</label>
                    <input
                        name="email"
                        className="input"
                        type="email"
                        placeholder="Ejem.modasports@gmail.com"
                        minLength="4"
                        style={{ width: '97%' }}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="label" style={{ fontSize: '12px' }}>Celular</label>
                    <input
                        name="phone"
                        className="input"
                        pattern="[0-9]+"
                        minLength="11"
                        maxLength="11"
                        placeholder="Ejem.04241917939"
                        style={{ width: '97%' }}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="label" style={{ fontSize: '12px', textAlign: 'center', color: 'green' }}>Ingresa tu numero de WhatsApp </label>
                    <p className="text-info-modal" onClick={() => navigate('/info')}>Al presionar aceptar, aceptas los terminos y condiciones</p>
                    <Button  >Aceptar</Button>
                </form>
            }


        </div>
    )
}