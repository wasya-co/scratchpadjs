
import React, { useContext, useState, } from 'react'
import Modal from "react-modal"
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

import {
  Btn,
  C, CloseBtn,
  FlexCol, FlexRow,
  ModalHeader,
  logg,
  useApi,
} from '$shared'
import {
  AuthContext,
} from '$components/users'

import styles from './LoginModal.module.scss'


/**
 * RegisterModal
 *
 * Uses LoginModal styling
**/
const RegisterModal = (props) => {
  // logg(props, 'RegisterModal')

  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    registerModalOpen, setRegisterModalOpen,
    // useApi,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'registerModalUsedContext')

  const api = useApi()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ password2, setPassword2 ] = useState('')

  const doRegister = async (email, password, password2) => {
    if (password !== password2) {
      toast('Passwords do not match')
      return
    }
    const out = api.doRegister({ email, password })

    out.then((r) => {
      setRegisterModalOpen(false)
      setLoginModalOpen(r.message)
    }).catch((e) => {
      toast("Registration failed")
    })
  }

  return <Modal
    className={`LoginModal ${styles.LoginModal}`}
    isOpen={registerModalOpen}
    overlayClassName={styles.LoginModalOverlay}
    portalClassName={styles.LoginModalPortal}
  >
    <ModalHeader onClose={() => setRegisterModalOpen(false)} >Register</ModalHeader>
    <FlexCol>
      <label htmlFor='email'>Email</label>
      <input type='email'    name='email'     value={email}    onChange={(e) => setEmail(e.target.value)    } />

      <label htmlFor='password'>Password</label>
      <input type='password' name='password'  value={password} onChange={(e) => setPassword(e.target.value) } />

      <label htmlFor='password2'>Confirm Password</label>
      <input type='password' name='password2' value={password2} onChange={(e) => setPassword2(e.target.value) } />

      <FlexRow style={{
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: '0.4em',
      }} >
        <Btn className="Submit" onClick={() => doRegister(email, password, password2) }>Register</Btn>
      </FlexRow>
      <hr style={{ margin: '2rem 0', borderWidth: '1px' }} />
      <FlexRow style={{ justifyContent: 'center' }} >
        <a onClick={() => setLoginModalOpen(true) || setRegisterModalOpen(false) }>Login Instead</a>
      </FlexRow>
    </FlexCol>
  </Modal>
}
RegisterModal.propTypes = {} // None so far

export default RegisterModal
