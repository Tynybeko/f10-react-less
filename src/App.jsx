import React, { useEffect, useState } from 'react'
import Button from './components/UI/Button'
import './App.css'
import TextField from './components/UI/TextField'
import Loader from './components/Loader'
import Update from './components/Update'

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [changeData, setChangeData] = useState(null)
  const [inputData, setInputData] = useState({
    title: '',
    price: 0,
    oldPrice: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputData(prev => ({ ...prev, [name]: value }))
  }

  const handleDelete = (id) => {
    setLoading(true)
    fetch(`https://66755308a8d2b4d072ef8f02.mockapi.io/api/v1/product/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => setData(prev => prev.filter(el => el.id != data.id)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))

  }


  useEffect(() => {
    setLoading(true)
    getData()
      .then(data => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])


  const getData = async () => {
    const response = await fetch(`https://66755308a8d2b4d072ef8f02.mockapi.io/api/v1/product`)
    if (!response.ok) return Promise.reject({ message: 'Error' })
    const data = await response.json()
    return Promise.resolve(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!(inputData.title && inputData.price > 0 && inputData.oldPrice > 0)) return
    setLoading(true)
    fetch(`https://66755308a8d2b4d072ef8f02.mockapi.io/api/v1/product`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)
    })
      .then(res => res.json())
      .then(data => {
        setData(prev => [...prev, data])
        setInputData({
          title: '',
          price: 0,
          oldPrice: 0
        })
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }


  return (
    <main>
      {
        loading ? <Loader /> : null
      }
      {
        changeData ? <Update setData={setData} oldData={changeData} id={changeData.id} setClose={() => setChangeData(null)} /> : null
      }
      <div>
        <form onSubmit={handleSubmit} className='add-form'>
          <TextField required value={inputData.title} onChange={handleChange} name="title" title={'Название'} />
          <TextField required value={inputData.price} onChange={handleChange} name="price" type="number" title={'Цена'} />
          <TextField required value={inputData.oldPrice} onChange={handleChange} name="oldPrice" type="number" title={'Стараная цена'} />
          <Button >
            Добавить
          </Button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <td>Num.</td>
            <td>Title</td>
            <td>Price</td>
            <td>#</td>
          </tr>
        </thead>
        <tbody>
          {
            data ? data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td >
                  <p className='relative h-full'>
                    {item.price}
                    <p className='absolute -top-4 left-20 line-through'>{item.oldPrice}</p>

                  </p>
                </td>
                <td className='flex gap-4'>
                  <Button onClick={() => handleDelete(item.id)}>
                    DELETE
                  </Button>
                  <Button onClick={() => setChangeData(item)}>
                    UPDATE
                  </Button>
                </td>
              </tr>
            ))
              : <tr>
                <td colSpan={4}>
                  ...Загрузка
                </td>
              </tr>
          }
          {
            data && data.length == 0 ? <tr>
              <td colSpan={4}>
                Пока нету данных
              </td>
            </tr>
              : null
          }
        </tbody>
      </table>

    </main>

  )
}