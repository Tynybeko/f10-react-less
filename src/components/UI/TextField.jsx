import React from 'react'

export default function TextField({ title, blockClass = '', ...attr }) {
    const { className, ...restAttr } = attr
    return (
        <label className={`field ${blockClass}`}>
            <p>{title ?? 'Input'}</p>
            <input className={`field-input ${className}`} {...restAttr} />
        </label>
    )
}
