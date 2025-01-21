import React, { useEffect } from 'react'
import API from '../axios'


export default function Contacts() {
  useEffect(() => {
    const token = ''
    API.get('sadsad', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    
  }, [])



  return (
    <div>Contacts PAGE</div>
  )
}
