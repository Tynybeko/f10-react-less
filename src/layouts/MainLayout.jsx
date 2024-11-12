import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet, useNavigate } from 'react-router-dom'

export default function MainLayout() {
    const navigate = useNavigate()

    useEffect(() => {
        const TOKEN = localStorage.getItem('token')
        if (!TOKEN) {
            navigate('/auth')
        }
    }, [])
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
