
import React, { Fragment as F, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  AuthContext,
} from '$components/users'
import {
  Actions,
  Btn,
  C,
  logg,
} from '$shared'

const W0 = styled.div`
`;


/**
 * A single text area that saves locally and in the cloud.
 */
const Scratchpad = (props) => {
  // logg(props, 'Scratchpad')

  const {
    useApi,
  } = useContext(AuthContext)

  const api = useApi()

  const [ txt, setTxt ] = useState(localStorage.getItem(C.names.scratchpad) || '')

  const doSave = () => {
    localStorage.setItem(C.names.scratchpad, txt)
    api.postProfile({ scratchpad: txt }).then((data) => {
      // toast('Updated profile.')
    }).catch((err) => {
      logg('Cannot update profile:', err)
      // toast('e54 - Cannot update profile.')
    })
  }

  return <W0>
    <textarea name='scratchpad' rows='20' cols='40'
      onChange={(e) => setTxt(e.target.value) }
      value={txt}
    / >
    <Actions>
      <Btn onClick={doSave}>Save</Btn>
    </Actions>
  </W0>
}
Scratchpad.propTypes = {
  // none so far
}

export default Scratchpad
