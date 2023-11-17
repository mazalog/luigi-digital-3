import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'wouter'
import FormLogin from '../../components/FormLogin'

export default function LoginPage() {

    const [, navigate] = useLocation()

    useEffect(() => {
        if (window.localStorage.getItem('logged')) navigate('/master/')
    }, [])

    return (
        <div className="App">
            <Helmet><title>ADMIN</title></Helmet>
            <div className="login-page">
                <div className="container-form-login">
                    <FormLogin />
                </div>
            </div>
        </div>
    )
}