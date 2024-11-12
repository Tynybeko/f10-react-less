import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { value, name } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        setError('')
        e.preventDefault()
        const response = axios.post('https://hadzhi2003.pythonanywhere.com/api/v1/auth/login/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + 'sadsad'
            }
        })
        response
            .then(res => {
                localStorage.setItem('token', res.data.token_key)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                setError(err?.response?.data?.massage ?? 'Неправильный логин и пароль!')
            })
            
    }



    return (
        <div>
            Login
            <form onSubmit={handleSubmit} >
                <label htmlFor="">
                    <p>Login</p>
                    <input placeholder=':email' name='email' onChange={handleChange} value={data.email} type="email" />
                </label>
                <label htmlFor="">
                    <p>Password</p>
                    <input placeholder=':Password' onChange={handleChange} name='password' value={data.password} type="text" />
                </label>
                
                <input type="submit" value="SEND" />
                {
                    error.length > 1 ? <p className='text-red-500 text-md'>{error}</p> : null
                }
            </form>
        </div>
    )
}
