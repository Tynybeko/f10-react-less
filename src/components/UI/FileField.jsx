import React, { useEffect, useRef, useState } from 'react'

export default function FileField({ title, blockClass = '', defaultValue, change = () => { }, ...attr }) {
    const inputRef = useRef()
    const { className, type, ...restAttr } = attr

    useEffect(() => {
        if (defaultValue && inputRef.current) return
        inputRef.current.files =  null
        inputRef.current.value =  ''
    }, [defaultValue])
    return (
        <label className={`max-w-xs flex py-2 pl-2 pr-5 gap-2 border-b-2 group border-blue-300 hover:scale-[1.05] focus:scale-[1.05] duration-300 ${blockClass}`}>
            <p className='flex-0 italic text-blue-300 '>{title ?? 'Input'}</p>
            <input ref={inputRef} onChange={e => {
                const { files } = e.target
                if (files && files[0]) {
                    change(files[0])
                } else {
                    change(null)
                }
            }} type='file' className={`hidden`} {...restAttr} />
            <svg className="feather feather-file-plus text-blue-300 group-hover:text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" x2="12" y1="18" y2="12" /><line x1="9" x2="15" y1="15" y2="15" /></svg>
            <p title={defaultValue?.name ?? 'Не выбрано'} className='italic flex-1 text-blue-300 truncate w-full '>{defaultValue ? defaultValue.name : 'Не выбрано'}</p>
        </label>
    )
}
