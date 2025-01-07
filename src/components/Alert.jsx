import React, { useRef } from 'react'
import Modal from './Modal'
import Button from './UI/Button'

export default function Alert({ isOpened, callback, title = 'Alert', desc = "Description" }) {
    return (
        <Modal callback={callback} isOpened={isOpened}>
            <div className='border-red-500 border w-60 flex flex-col gap-5 items-center p-2'>
                <h1 className='text-primary'>{title}</h1>
                <div className='relative bg-blue-400 w-10 h-10 rounded-full'> 
                    <div className='absolute w-full h-full animate-spin p-2 rounded-full border2'></div>

                </div>
                <hr />
                <p>{desc}</p>
                <hr />
                <Button onClick={callback} variant='secondary'>OK</Button>
            </div>
        </Modal>
    )
}
