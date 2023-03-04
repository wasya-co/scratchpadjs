
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'


import { AuthContext, AuthContextProvider } from '$components/users/AuthContext'
import AuthWidget from '$components/users/AuthWidget'
// import Scratchpad from '$components/users/Scratchpad'
import {
  C,
  useApi,
} from '$shared'

import './Home.scss'
import 'ishlibjs/dist/index.css'

const W0 = styled.div`
  // border: 1px solid yellow;
`;

const Home = (props) => {
  // logg(props, 'Home')

  const {
    currentUser, setCurrentUser,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'HomeUserContext')

  // return <div style={{ border: '1px solid green' }} >Home</div>

  return <W0>
     <AuthContextProvider {...{ useApi, }} >
      <AuthWidget />
      {/* { currentUser.email && <Scratchpad /> } */}
    </AuthContextProvider >
  </W0>
}

export default Home
