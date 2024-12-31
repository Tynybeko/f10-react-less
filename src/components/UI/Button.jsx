import React, { useEffect } from 'react'


const variable = {
    'primary': 'bg-blue-300 hover:bg-blue-500',
    'secondary': 'bg-green-300 hover:bg-green-500',
    'warning': 'bg-orange-300 hover:bg-orange-500',
    'error': 'bg-red-300 hover:bg-red-500',
}


export default function Button({ children, variant = 'primary', ...args }) {
    const { className, ...restAttr } = args


    const getData = () => console.log('GETTING DATA DATABASE')
    return (
        <button className={`${className} ${variable[variant]}`}  {...restAttr}>{children}</button>
    )
}

