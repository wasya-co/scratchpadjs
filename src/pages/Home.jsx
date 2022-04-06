
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from "react"

import { PasswordLogin, TwofoldContextProvider, Scratchpad } from "ishjs"

import './Home.css'

const config = {
  apiOrigin: 'http://localhost:3001',
}

const useApi = () => ({
  doLogin: (props) => `${config.apiOrigin}/api/users/login.json`
})

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
