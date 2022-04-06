
import { ToastContainer, toast } from 'react-toastify'
import React, { useContext } from 'react'

import request from '$shared' // @TODO: this isn't wired yet

import config from 'config'
import {
  AuthContext,
  logg,
} from 'ishlibjs'

const C = {
  anonUser: {},
}

const useApi = () => {
  const {
    setCurrentUser,
    setLoginModalOpen,
  } = useContext(AuthContext)

  return {
    postLogin: ({ email, password }) => {
      request.post(`${config.apiOrigin}${config.router.loginPath}`, { email, password }).then((r) => r.data).then((resp) => {
        localStorage.setItem(C.jwt_token, resp.jwt_token)
        localStorage.setItem(C.current_user, JSON.stringify(resp))
        setCurrentUser(resp) // must be done *after* setting C.jwt_token
        setLoginModalOpen(false)
      }).catch((e) => {
        logg(e, 'e322')
        toast("Login failed")
        setCurrentUser(C.anonUser)
      })
    }
  }
}

export default useApi
export {
  C,
  useApi,
}
