import { useEffect, useState } from 'react'
import clientsService from '../services/clients'


export default function useClients() {

    const [clients, setZones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        clientsService
            .getAll()
            .then((response) => {
                setZones(response)
                setLoading(false)
            })
    }, [])

    const createClient = (object) => {
        setLoading(true)
        clientsService
            .create(object)
            .then((response) => {
                setZones([...clients, response])
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }
    const deleteClient = (id) => {
        clientsService
            .deleteZone(id)
            .then(() => {
                setZones(clients.filter((zone) => zone.id !== id))
            })
    }

    return { clients, createClient, deleteClient, loading }
}