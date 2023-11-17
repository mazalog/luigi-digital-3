import React from 'react'
import useSendWhatsapp from '../../hooks/useSendWhatsapp'
import useUsers from '../../hooks/useClients'
import useNotifications from '../../hooks/useNotifications'
import Loading from '../Loading'

export default function Users() {

    const { clients, loading } = useUsers()

    const { sendNotification, loadingN, message } = useNotifications()
    const { sendWhatsapp, loadingW } = useSendWhatsapp()

    return (
        <>
            <p className="subtitle-master t-left">Usuarios</p>
            {
                message ? <div>
                    <p>{message}</p>
                </div> : <>
                    {
                        loadingN ? <Loading /> : <div className="add-article" onClick={() => sendNotification('MODASPORTS TRAE PROMOCIONES PARA TI')}><span>Enviar notificaciones por  correo + </span></div>
                    }

                    {
                        loadingW ? <Loading /> :
                            loading ? <Loading /> :
                                <div className="add-article m-t-2" onClick={() => sendWhatsapp({ message: 'SE VIENEN PROMOCIONES', to: clients })}><span>Enviar notificaciones por WhatsApp + </span></div>
                    }


                </>
            }
            {
                loading ? <Loading /> : <table className="m-t-2" style={{ border: '1px solid gray', borderRadius: '12px' }}>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                    </tr>
                    {
                        clients.map(item => <tr style={{ borderTop: '1px solid gray', }}>
                            <td style={{ width: '33%', border: '1px solid darkgray', borderRadius: '12px' }}>{item.name}</td>
                            <td style={{ width: '33%', border: '1px solid darkgray', borderRadius: '12px' }}>{item.email}</td>
                            <td style={{ width: '33%', border: '1px solid darkgray', borderRadius: '12px' }}>{item.phone}</td>
                        </tr>)
                    }
                </table>
            }


        </>
    )
}