import React from 'react'
import * as C from './styles'

interface Props {
    backgroundColor: string;
    icon: JSX.Element
    onClick:()=>any
  }

export default function SwipeCardButton(props:Props) {
  return (
    <C.SwipeCardButton {...props}>{props.icon}</C.SwipeCardButton>
  )
}
