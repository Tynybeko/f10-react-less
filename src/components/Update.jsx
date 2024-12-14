import React, { useState } from 'react'
import TextField from './UI/TextField'
import Loader from './Loader'
import Button from './UI/Button'

export default function Update({ oldData, setData, id, setClose }) {
    const [inputData, setInputData] = useState(oldData ?? {
        title: '',
        price: 0,
        oldPrice: 0
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!(inputData.title && inputData.price > 0 && inputData.oldPrice > 0)) return
        setLoading(true)
        fetch(`https://66755308a8d2b4d072ef8f02.mockapi.io/api/v1/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
            .then(res => res.json())
            .then(data => {
                setData(prev => prev.map(item => item.id == id ? { ...data } : item))
                setClose()
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }


    return (
        <div className='w-screen z-20 h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-80'>
            <div className='relative bg-white border-2 border-indigo-400 rounded-lg p-4'>
                {
                    loading && <Loader />
                }
                <form onSubmit={handleSubmit} >
                    <TextField required value={inputData.title} onChange={handleChange} name="title" title={'Название'} />
                    <TextField required value={inputData.price} onChange={handleChange} name="price" type="number" title={'Цена'} />
                    <TextField required value={inputData.oldPrice} onChange={handleChange} name="oldPrice" type="number" title={'Стараная цена'} />
                    <Button >
                        Добавить
                    </Button>
                    <Button type="button" onClick={setClose}>
                        Отмена
                    </Button>
                </form>
            </div>


        </div>
    )
}
