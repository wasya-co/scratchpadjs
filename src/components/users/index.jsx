
import { Plugins } from '@capacitor/core'
import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import {
  Btn,
  C,
  logg,
} from '$shared'

/* A */
export { AuthContext } from './AuthContext'

/* F */
const { FacebookLogin: _FacebookLogin } = Plugins

const FACEBOOK_PERMISSIONS = ['email']

/* J */

/* L */
export { default as LoginModal } from "./LoginModal"

/* R */
export { default as RegisterModal } from "./RegisterModal"


