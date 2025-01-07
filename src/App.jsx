import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import Button from './components/UI/Button'
import './App.css'
import TextField, { AreaField } from './components/UI/TextField'
import FileField from './components/UI/FileField'
import api from './axios'
import Modal from './components/Modal'
import Alert from './components/Alert'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Header from './components/Header'


export default function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/header' element={<Header />} />
        <Route path='*' element={< >
          <h1>404</h1>
        </>} />
      </Routes>

    </>

  )
}
