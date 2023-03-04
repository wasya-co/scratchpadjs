
import React, { Fragment as F, useContext, } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'

import {
  AuthContext, AuthContextProvider,
  LoginModal, LoginWithEmail,
  RegisterModal, RegisterWithEmail,
} from "$components/users"

import {
  Btn,
  C,
  FlexCol, FlexRow,
  logg,
} from "$shared"


const RegisterWithEmailBtn = (props) => {
  return <Btn {...props} >Register with Email</Btn>
}
const LoginWithEmailBtn = (props) => {
  return <Btn {...props} >Login with Email</Btn>
}

const IconLogout = ({ fill, w, h, ...props }) => {
  // const theme = useTheme()

  w = w ? w : '12px'
  h = h ? h : '12px'
  // fill = fill ? fill : theme.colors.text // @TODO: implement theme in ishlibjs
  fill = fill ? fill : '#333333'

  return <span {...props} >
    <svg xmlns="http://www.w3.org/2000/svg"
      width={w} height={h}
      viewBox="0 0 96.943 96.943" style={{ enableBackground: 'new 0 0 96.943 96.943' }}
    ><g><g><path d="M61.168,83.92H11.364V13.025H61.17c1.104,0,2-0.896,2-2V3.66c0-1.104-0.896-2-2-2H2c-1.104,0-2,0.896-2,2v89.623 c0,1.104,0.896,2,2,2h59.168c1.105,0,2-0.896,2-2V85.92C63.168,84.814,62.274,83.92,61.168,83.92z"/> <path d="M96.355,47.058l-26.922-26.92c-0.75-0.751-2.078-0.75-2.828,0l-6.387,6.388c-0.781,0.781-0.781,2.047,0,2.828 l12.16,12.162H19.737c-1.104,0-2,0.896-2,2v9.912c0,1.104,0.896,2,2,2h52.644L60.221,67.59c-0.781,0.781-0.781,2.047,0,2.828 l6.387,6.389c0.375,0.375,0.885,0.586,1.414,0.586c0.531,0,1.039-0.211,1.414-0.586l26.922-26.92 c0.375-0.375,0.586-0.885,0.586-1.414C96.943,47.941,96.73,47.433,96.355,47.058z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g></g><g></g><g></g>
    </svg>
  </span>
}

/**
 * If user is logged in, display the email/handle and allow logout.
 * If user is not logged in, allow registration and login via Fb, and email+passwd.
 *
 * @TODO: doesn't seem like this belongs in ishlibjs _vp_ 2022-09-04
**/
const AuthWidget = (props) => {
  // logg(props, 'AuthWidget')

  const {
    currentUser, setCurrentUser,
    doLogout: _doLogout,
    setLoginModalOpen,
    setRegisterModalOpen,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'AuthWidgetUsedAuthContext')

  // @TODO: doesn't belong here. Should be injected from the host. _vp_ 2022-09-04
  const doLogout = () => {
    setCurrentUser(C.anonUser)
    localStorage.removeItem('jwt_token')
    window.location.reload(false)
  }

  const onError = (inn) => {
    logg(inn, 'cannot login!')
    toast('cannot login!')
  }
  const onSuccess = (inn) => {
    logg('Logged in successfully.')
    setCurrentUser(inn)
  }

  if (currentUser?.email) {
    return <FlexRow>
      [&nbsp;{currentUser.email}&nbsp;<IconLogout onClick={doLogout} >Logout</IconLogout>&nbsp;]
    </FlexRow>
  }

  return <F>
    <FlexCol>
      {/* <FacebookLogin /> */}
      <RegisterWithEmailBtn onClick={() => { setRegisterModalOpen(true) }} />
      <LoginWithEmailBtn    onClick={() => { setLoginModalOpen(true) }} />
    </FlexCol>

    <RegisterModal />
    <LoginModal {...{ onError, onSuccess }} />

  </F>
}
AuthWidget.propTypes = {} // none so far

export default AuthWidget
