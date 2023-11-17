import React from 'react'
import { Helmet } from 'react-helmet'
import NavBarMaster from '../../components/NavBarMaster'
import useUser from '../../hooks/useUser'
// import Users from '../../components/Users'
import useClients from '../../hooks/useClients'
import Users from '../../components/Users'

export default function UsersPage() {
    let currentPage = "USUARIOS"

    const { user } = useUser()

    return (
        <div className="App">
            <Helmet> <title>LUIGIDIGITAL  - USUARIOS</title> </Helmet>
            <NavBarMaster currentPage={currentPage} />
            <div className="container-users">

                <Users />

            </div>
        </div>
    )
}
