

import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import {
  C,
} from "$shared"


const AuthContext = createContext({})
const AuthContextProvider = ({children, ...props }) => {
  // logg(props, 'AuthContextProvider')
  let {
    currentUser: _currentUser = C.anonUser, setCurrentUser: _setCurrentUser,
    loginModalOpen: _loginModalOpen = false, setLoginModalOpen: _setLoginModalOpen,
    registerModalOpen: _registerModalOpen = false, setRegisterModalOpen: _setRegisterModalOpen,
  } = props

  let [ currentUser, setCurrentUser ] = useState(_currentUser)
  if (_setCurrentUser) {
    currentUser = _currentUser
    setCurrentUser = _setCurrentUser
  }

  let [ loginModalOpen, setLoginModalOpen ] = useState(_loginModalOpen)
  if (_setLoginModalOpen) {
    loginModalOpen = _loginModalOpen
    setLoginModalOpen = _setLoginModalOpen
  }

  let [ registerModalOpen, setRegisterModalOpen ] = useState(_registerModalOpen)
  if (_setRegisterModalOpen) {
    registerModalOpen = _registerModalOpen
    setRegisterModalOpen = _setRegisterModalOpen
  }

  const moreProps = {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    registerModalOpen, setRegisterModalOpen,
  }

  //
  // props.useApi isRequired
  //
  return <AuthContext.Provider value={{ ...props, ...moreProps }} >
    { children }
  </AuthContext.Provider>
}
AuthContextProvider.propTypes = {
  useApi: PropTypes.func.isRequired,
}
export {
  AuthContext, AuthContextProvider,
}