import React from 'react'
import CreateProfileForm from '../../components/CreateProfileForm'
import Header from '../../components/Header'
import * as C from './styles'

export default function CreateProfile() {
  return (
    <C.Container>
        <Header/>
        <C.MainContainer>
            <CreateProfileForm/>
        </C.MainContainer>
    </C.Container>
  )
}
