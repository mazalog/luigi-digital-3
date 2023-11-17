import { useState } from 'react'
import notificationService from '../services/notification'


export default function useNotifications() {

    const [loadingN, setLoading] = useState(false)
    const [message, setMessage] = useState(false)

    const sendNotification = (subject) => {
        setLoading(true)
        notificationService
            .create(subject)
            .then((response) => {
                setLoading(false)
                setMessage('Envio exitoso')
                setTimeout(() => {
                    setMessage('')
                }, 4000)
            })
            .catch(() => {
                setLoading(false)
                setMessage('Ocurrio algun error')
                setTimeout(() => {
                    setMessage('')
                }, 4000)
            })
    }


    return { sendNotification, loadingN, message }
}