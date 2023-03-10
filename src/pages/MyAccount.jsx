

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import {
  logg,
  useApi,
} from "$shared"

const MyAccount = (props) => {
  logg(props, 'MyAccount')

  const [ account, setAccount ] = useState({})

  const api = useApi()

  useEffect(() => {
    api.getMyAccount().then(r => {
      setAccount(r)
    })
  }, [])

  return <>
    <h1>My Account</h1>
    { account.email || 'no-email' }
  </>
}
export default MyAccount
