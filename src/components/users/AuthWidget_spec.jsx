
import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import { act } from '@testing-library/react'

import { logg, } from "$shared"
import { AuthContextProvider, AuthWidget, } from "./"

enzyme.configure({ adapter: new Adapter() })

describe("AuthWidget", () => {

  test('renders', async () => {

    // Somehow it gotta be insite it() scope?! _vp_ 2022-09-01
    const mockDoRegister = jest.fn(() => new Promise(() => {}, () => {}))
    const useApi = () => ({
      doRegister: mockDoRegister,
    })

    const theseProps = {
      loginModalOpen: false, setLoginModalOpen: () => {},
      useApi: useApi,
    }
    let wrapper = mount(<AuthContextProvider {...theseProps} >
      <AuthWidget />
    </AuthContextProvider>)
    expect(wrapper).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
