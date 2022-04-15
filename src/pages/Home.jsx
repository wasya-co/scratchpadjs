
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  AuthContext, AuthWidget,
  logg,
  Scratchpad,
} from "ishlibjs"

import { C, useApi } from '$shared'

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
    <AuthWidget />
    { currentUser.email && <Scratchpad /> }
  </W0>
}

export default Home
