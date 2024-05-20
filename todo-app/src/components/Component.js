import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/contextapi'

export default function Component() {
    const counter = useContext(counterContext)
  return (
    <div>
      {counter}
    </div>
  )
}
