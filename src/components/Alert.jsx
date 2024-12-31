import React, { useRef } from 'react'
import Modal from './Modal'
import Button from './UI/Button'

export default function Alert({ isOpened, callback, title = 'Alert', desc = "Description" }) {
    return (
        <Modal callback={callback} isOpened={isOpened}>
            <div className='border-red-500 border w-60 flex flex-col gap-5 items-center p-2'>
                <h1>{title}</h1>
                <hr />
                <p>{desc}</p>
                <hr />
                <Button onClick={callback} variant='secondary'>OK</Button>
            </div>
        </Modal>
    )
}
