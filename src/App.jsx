import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import Button from './components/UI/Button'
import { Card } from './components/Card'
import './App.css'
import TextField, { AreaField } from './components/UI/TextField'
import FileField from './components/UI/FileField'


export default function App() {
  const [createModal, setCreateModal] = useState(false)
  const [inputData, setInputData] = useState({
    title: '',
    image: null,
    description: ''
  })
  const [data, dispatchData] = useReducer((state, action) => {
    const { type, payload } = action
    switch (type) {
      case 'CREATE':
        return [...state, { id: Date.now(), ...payload }]
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchData({ type: 'CREATE', payload: inputData })
    closeModal()
  }

  const changeData = (e) => {
    const { name, value } = e.target
    setInputData(prev => ({ ...prev, [name]: value }))
  }

  const closeModal = () => {
    setCreateModal(prev => !prev)
    setInputData({
      title: '',
      image: null,
      description: ''
    })
  }

  return (
    <main>
      <dialog open={createModal}>
        <form onSubmit={handleSubmit} className='w-md border p-5 flex flex-col gap-5 '>
          <TextField
            onChange={changeData}
            value={inputData.title}
            required
            type="text"
            name="title"
            title="Название" />
          <FileField
            change={(file) => {
              setInputData(prev => ({ ...prev, image: file }))
            }}
            defaultValue={inputData.image}
            required
            accept='image/*'
            name="image"
            title="Изоброжение" />
          <AreaField
            onChange={changeData}
            value={inputData.description}
            required
            name="description"
            title="Описание" />
          <div className='flex justify-between'>
            <Button
              type="submit"
              className={'bg-blue-300 hover:bg-blue-500 text-white'}>Добавить</Button>
            <Button
              onClick={closeModal}
              type="button"
              className={'bg-red-300 hover:bg-red-500 text-white'}>Отмена</Button>
          </div>
        </form>
      </dialog>
      <Button onClick={closeModal} className="bg-green-300 hover:bg-green-500 text-white">
        CREATE
      </Button>
      <div className='flex flex-wrap gap-2'>
        {
          data.map(item => (
            <Card key={item.id} product={item} />
          ))

        }
      </div>




    </main>
  )
}
