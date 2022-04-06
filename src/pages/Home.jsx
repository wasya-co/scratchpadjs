
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from "react"

import {
  PasswordLogin, Scratchpad, TwofoldContextProvider,
} from "ishlibjs"

import { C, useApi } from '$shared'

import './Home.css'

const Home = (props) => {
  // logg(props, 'Home')

  const [ currentUser, setCurrentUser ] = useState(C.anonUser)

  const providerProps = {
    currentUser, setCurrentUser,
    useApi,
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <TwofoldContextProvider {...providerProps} >
          <PasswordLogin />
          <Scratchpad />
        </TwofoldContextProvider>
      </IonContent>
    </IonPage>
  )
}

export default Home
