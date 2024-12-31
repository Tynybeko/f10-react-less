import React, { useContext } from 'react'
import Button from './UI/Button'
import { ContextName } from '../App'

export const Card = ({ product, }) => {
    const {state, setState} = useContext(ContextName)

    return (
        <div className='flex flex-[1_1_200px] flex-col'>
            <h1>{product.title}</h1>
            <div className=' rounded-lg overflow-hidden'>
                <img className='object-cover' src={'/vite.svg'} alt="Image" />
            </div>
            <p>{product.description}</p>
            <Button onClick={() => setState(prev => prev + 1)}>+ {state}</Button>
        </div>
    )
}


