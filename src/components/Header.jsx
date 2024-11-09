import React from 'react'
import { NavLink, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const [seacrhParams, setSearchParams] = useSearchParams()
    const params = useParams()
    console.log(params);
    console.log(location);
    return (
        <header className='flex w-full justify-between py-4 px-8 bg-green-300'>
            <h1 className='text-xl font-bold flex gap-2 items-center'>
                <button onClick={() => navigate(-1)}> {"<"} </button>
                Header
            </h1>
            <nav>
                <ul className='flex gap-4'>
                    <li>
                        <NavLink to={'/'}>Main</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/elem'}>Elem</NavLink>
                    </li>
                </ul>
            </nav>
            <p>
                <button onClick={() => navigate(1)}> {">"} </button>
            </p>
        </header>
    )
}
