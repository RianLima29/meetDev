import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'

export default function Footer() {

    const navigate = useNavigate()

  return (
    <C.Container>
        <C.CardsButton onClick={()=>navigate('/')}/>
        <C.ChatButton onClick={()=>navigate('/chat-list')}/>
    </C.Container>
  )
}
