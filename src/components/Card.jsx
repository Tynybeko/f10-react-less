import React from 'react'

export const Card = ({ product }) => {
    return (
        <div className='flex flex-[1_1_200px] flex-col'>
            <h1>{product.title}</h1>
            <div className=' rounded-lg overflow-hidden'>
                <img className='object-cover' src={URL.createObjectURL(product.image)} alt="Image" />
            </div>
            <p>{product.description}</p>
        </div>
    )
}


