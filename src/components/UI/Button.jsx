import React, { useEffect } from 'react'

export default function Button({ children, ...args }) {
    useEffect(() => {
        getData()

        return () => {
            console.log('C:LOSE')
        }
    }, [])


    const getData = () => console.log('GETTING DATA DATABASE')
    return (
        <button  {...args}>{children}</button>
    )
}

