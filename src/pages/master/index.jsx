import React from 'react'
import { Helmet } from 'react-helmet'
import ListOrdersMaster from '../../components/ListOrdersMaster'
import NavBarMaster from '../../components/NavBarMaster'
import useUser from '../../hooks/useUser'

export default function MasterPage() {

    let currentPage = "PEDIDOS"

    const { user } = useUser()

    return (
        <div className="App">
            <Helmet> <title>LUIGIDIGITAL  - PEDIDOS</title> </Helmet>
            <NavBarMaster currentPage={currentPage} />
            <ListOrdersMaster />
        </div>
    )
}