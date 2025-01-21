import React from 'react'
import { useParams } from 'react-router'


export default function ContactsSingle() {
  const params = useParams()
  console.log(params);


  return (
    <div> SINGLE PARAMS CONTACT ID^ {params.contactID} </div>
  )
}
