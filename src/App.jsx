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
import ContactsSingle from './pages/ContactsSingle'
import PrivateLayout from './layout/PrivateLayout'
import AuthLayout from './pages/Auth/AuthLayout'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'


export default function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/' element={<PrivateLayout />}>

        </Route> */}


      </Routes>

    </>

  )
}
