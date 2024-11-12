import { createContext, useCallback, useEffect, useReducer, useState } from "react"
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from "./pages/Main"
import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Elem from "./pages/Elem"
import ELemParams from "./pages/ELemParams"
import Auth from "./pages/Auth"
export const Context = createContext(1)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//   },
//   {
//     path: "about",
//     element:<Outlet />,
//     children: [
//       {
//         index: true,
//         path: "contact",
//         element: <div>Contact</div>,
//       },
//       {
//         path: "asd",
//         element: <div>ADS</div>,
//       },
//     ]
//   },

// ]);


export default function App() {
  const [state, setState] = useState(1)

  return (
    <Context.Provider value={[state, setState, 'Hello Ahmedali']}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="elem" element={<Elem />} >
              <Route path=":elemId" element={<ELemParams />} />
            </Route>
          </Route>
          <Route path="auth" element={<Auth/>}/>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}