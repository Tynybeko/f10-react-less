import React from 'react'

export default function TextField({ title, blockClass = '', ...attr }) {
    const { className, ...restAttr } = attr
    return (
        <label className={`flex py-2 pl-2 pr-5 gap-2 border-b-2 border-blue-300 hover:scale-[1.05] focus:scale-[1.05] duration-300 ${blockClass}`}>
            <p className='italic text-blue-300 '>{title ?? 'Input'}</p>
            <input className={`border-b outline-none focus:border-b-[1.5px] focus:border-red-300 duration-300  border-blue-300 ${className ?? ''}`} {...restAttr} />
        </label>
    )
}



export const AreaField = ({ title, blockClass = '', ...attr }) => {
    const { className, ...restAttr } = attr
    return (
        <label className={` py-2 pl-2 pr-5 gap-2 border-2 border-blue-300 hover:scale-[1.05] focus:scale-[1.05] duration-300 ${blockClass}`}>
            <p className='italic text-blue-300 '>{title ?? 'Input'}</p>
            <textarea className={`w-full outline-none focus:border-b-[1.5px] focus:border-red-300 duration-300  border-blue-300 ${className ?? ''}`} {...restAttr} />
        </label>
    )
}