import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import Button from './components/UI/Button'
import { Card } from './components/Card'
import './App.css'
import TextField, { AreaField } from './components/UI/TextField'
import FileField from './components/UI/FileField'
import Items from './components/Items'
import api from './axios'
import Modal from './components/Modal'
import Alert from './components/Alert'

export const ContextName = createContext(1)

export default function App() {
  const [state, setState] = useState(true)


  return (
    <ContextName.Provider value={{ state, setState }}>
      <main>
        <Alert
          title='Welcome'
          desc={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit laboriosam corrupti facere harum aliquid non, rerum possimus doloribus in blanditiis sapiente eum neque quae, esse illum consequuntur nisi. Explicabo, repudiandae?`}
          callback={() => setState(prev => !prev)}
          isOpened={state} />
        <Button >
          + {state}
        </Button>
      </main>
    </ContextName.Provider>

  )
}
