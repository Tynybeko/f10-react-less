import React from 'react'
import Button from './UI/Button'
import { Link, NavLink } from 'react-router'

const navs = [
    {
        id: 1,
        title: 'Главная',
        href: '/',
    },
    {
        id: 2,
        title: 'Контакты',
        href: '/contacts',
    },
    {
        id: 3,
        title: 'Header',
        href: '/header',
    },
]

export default function Header() {
    return (
        <header className='flex justify-between w-full p-5 bg-green-300 items-center'>
            <h1>Logo</h1>
            <nav className='flex gap-2'>
                {
                    navs.map(item => (
                        <NavLink key={item.id} to={{
                            pathname: item.href,
                            search: '?name=Dior&surname=SDasd',
                            hash: '#hello'
                        }}
                            className={(param) => {
                                if (param.isActive) {
                                    return 'bg-red-500'
                                }
                                return ''
                            }}
                        >{item.title}</NavLink>
                    ))
                }
            </nav>
            <div>
                <Button>{ }</Button>
            </div>
        </header>
    )
}
