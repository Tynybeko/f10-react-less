import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import Header from '../components/Header'
import API from '../axios'
export default function PrivateLayout() {
    const navigate = useNavigate()
    const [profile, setProfile] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem('tokenV1')
        if (!token) {
            return navigate('/auth')
        }
        API.get('auth/profile')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <Header />
            <Outlet context={[123123, 1232131]} />
        </>
    )
}
