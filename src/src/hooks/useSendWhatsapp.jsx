import { useState } from 'react'
import whatsappService from '../services/sendWhatsapp'


export default function useSendWhatsapp() {

    const [loadingW, setLoading] = useState(false)


    const sendWhatsapp = (object) => {
        setLoading(true)
        whatsappService
            .create(object)
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)

            })
    }


    return { sendWhatsapp, loadingW }
}