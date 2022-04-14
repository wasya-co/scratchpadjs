
import { ToastContainer, toast } from 'react-toastify'
import React, { useContext } from 'react'

import request from './request'

import config from 'config'
import {
  AuthContext,
  logg,
} from 'ishlibjs'
import C from './C'


const useApi = () => {
  const {
    setCurrentUser,
    setLoginModalOpen,
  } = useContext(AuthContext)
  const jwt_token = localStorage.getItem(C.jwt_token)

  return {
    postLogin: ({ email, password }) => {
      return request.post(`${config.apiOrigin}${config.router.loginPath}`, { email, password }).then((r) => r.data).then((resp) => {
        logg(resp, 'got this resp')

        localStorage.setItem(C.jwt_token, resp.jwt_token)
        localStorage.setItem(C.current_user, JSON.stringify(resp))
        setCurrentUser(resp) // must be done *after* setting C.jwt_token
        setLoginModalOpen(false)
      }).catch((e) => {
        logg(e, 'e322')
        toast("Login failed")
        setCurrentUser(C.anonUser)
      })
    },

    postProfile: ({ scratchpad }) => {
      return request.post(`${config.apiOrigin}${config.router.myProfilePath}`,
        { jwt_token, profile: { scratchpad, } }
      ).then((r) => r.data).then((resp) => {
        logg(resp, 'got this resp')
      }).catch((e) => {
        logg(e, 'e320')
      })
    },

  }
}

export { default as S } from './S'
export default useApi
export {
  C,
  logg,
  useApi,
}
