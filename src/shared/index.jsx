
import { ToastContainer, toast } from 'react-toastify'
import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  ChevronLeft as _ChevronLeft,
  ChevronRight as _ChevronRight,
  Close as _Close,
  Menu as _MenuIcon,
} from '@material-ui/icons'

import request from './request'

import config from 'config'
import {
  AuthContext,
  logg,
} from 'ishlibjs'
import C from './C'

/* B */

/**
 * Just your regular shadowed box. Pointer cursor. TDD
**/
export const Btn = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: .3em 1em;
`;

/* C */

/**
 * CloseBtn
**/
export const CloseBtn = ({ children, ...props }) => {
  return <_Close style={{ cursor: 'pointer', ...props.style }} {...props} />
};
CloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}

/* F */


/**
 * FlexCol
**/
const _FlexCol = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin: auto .4em; // @TODO: standardize this size!
  }
`;
export const FlexCol = ({ children, ...props }) => <_FlexCol className="FlexCol" {...props} >{children}</_FlexCol>


/**
 * FlexRow
 *
 * @TODO: Remove. Where is this used?! This is silly.
**/
export const FlexRow = styled.div`
  display: flex;

  > * {
    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!
  }
`;

/* M */

const _Header = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 1.2rem;
`;
export const ModalHeader = ({ children, onClose, ...props }) => {
  return <FlexRow >
    <_Header>{children}</_Header>
    <CloseBtn onClick={onClose} />
  </FlexRow>
}
ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
}

/* R */
export { request }

/* U */

const useApi = () => {
  const {
    setCurrentUser,
    setLoginModalOpen,
  } = useContext(AuthContext)
  const jwt_token = localStorage.getItem(C.jwt_token)

  return {
    getMyAccount: () => {
      return request.get(`${config.apiOrigin}${config.router.myProfilePath}?jwt_token=${jwt_token}`
      ).then((r) => r.data).then((resp) => {
        return resp
      }).catch((e) => {
        logg(e, 'e320')
      })
    },

    postLogin: ({ email, password }) => {
      return request.post(`${config.apiOrigin}${config.router.loginPath}`, { user: { email, password } }).then((r) => r.data).then((resp) => {
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
// export default useApi
export {
  C,
  logg,
  useApi,
}
