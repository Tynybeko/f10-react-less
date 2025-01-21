import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
   
    return (
        <div className='bg-red-300 w-screen h-screen flex items-center justify-center'>
            <Outlet />
        </div>
    )
}
