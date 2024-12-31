import React, { useRef } from 'react'

export default function Modal({ children, isOpened, callback }) {
    if (!isOpened) return null
    return (
        <div onClick={() => callback()} className='w-full h-screen fixed top-0 left-0 bg-black bg-opacity-60 flex justify-center items-center'>
            <div onClick={(e) => e.stopPropagation()} className='bg-white p-5'>
                {children}
            </div>
        </div>
    )
}
