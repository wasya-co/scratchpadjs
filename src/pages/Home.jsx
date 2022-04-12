
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'

import {
  AuthContext, AuthWidget,
  logg,
  Scratchpad,
} from "ishlibjs"

import { C, useApi } from '$shared'

import './Home.css'

const Home = (props) => {
  const {
    currentUser, setCurrentUser,
  } = useContext(AuthContext)

  return <IonPage>
    <IonContent fullscreen>
      <AuthWidget />
      { currentUser.email && <Scratchpad /> }
    </IonContent>
  </IonPage>
}

export default Home
