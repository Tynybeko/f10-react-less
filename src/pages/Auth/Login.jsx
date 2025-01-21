import React, { useState } from 'react'
import Button from '../../components/UI/Button'
import API from '../../axios'
import { useNavigate } from 'react-router'

export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        login: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [viewPass, setView] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        API.post(`auth/login`, data)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('tokenV1', res.data.jwt_token.access_token)
                localStorage.setItem('refresh   ', res.data.jwt_token.refresh_token)
                navigate('/')
            })
            .catch(err => {

                setError(err.response.data.message)
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='bg-white rounded-lg p-5'>
                <h1>Login</h1>
                <div className='flex flex-col gap-5 mt-5'>
                    <label className='border-b-2' htmlFor="login">
                        <p>Login</p>
                        <input onChange={handleChange} value={data.email} required type="text" placeholder='email' name='login' />
                    </label>
                    <label className='border-b-2' htmlFor="login">
                        <p>Password</p>
                        <div>
                            <input onChange={handleChange} value={data.password} required type={viewPass ? 'text' : "password"} placeholder='*******' name='password' />
                            <input onChange={() => {
                                setView(prev => !prev)
                            }} checked={viewPass} type="checkbox" id="" />
                        </div>
                    </label>
                    <p className='h-5 text-sm text-red-500'>{error}</p>
                    <Button className="text-white">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}
