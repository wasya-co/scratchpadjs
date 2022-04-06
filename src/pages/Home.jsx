
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'

import {
  AuthContextProvider, AuthWidget,
  logg,
  Scratchpad,
} from "ishlibjs"

import { C, useApi } from '$shared'

import './Home.css'

const Home = (props) => {
  logg(props, 'Home')

  const [ currentUser, setCurrentUser ] = useState(C.anonUser)

  const providerProps = {
    currentUser, setCurrentUser,
    useApi,
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <AuthContextProvider {...providerProps} >
          <AuthWidget />
          { currentUser.email && <Scratchpad /> }
        </AuthContextProvider>
      </IonContent>
    </IonPage>
  )
}

export default Home
