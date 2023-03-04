import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { act } from '@testing-library/react'

import { AuthContextProvider, MyAccountWidget } from "$components/users"
import { AppMock, logg } from "$shared"


import { RegisterModal } from "./"

configure({ adapter: new Adapter() })

const C = {
  anonUser: null,
}

let currentUser = C.anonUser
const setCurrentUser = (props) => currentUser = props


describe("RegisterModal", () => {

  it("renders -  ", async () => {

    // Somehow it gotta be insite it() scope?! _vp_ 2022-09-01
    const mockDoRegister = jest.fn(() => new Promise(() => {}, () => {}))
    const useApi = () => ({
      doRegister: mockDoRegister,
    })

    const w = mount(<AuthContextProvider {...{
      currentUser, setCurrentUser,
      registerModalOpen: true, setRegisterModalOpen: () => {},
      useApi,
    }} ><RegisterModal /></AuthContextProvider>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  it('calls api#doRegister -  ', async () => {

    // Somehow it gotta be insite it() scope?! _vp_ 2022-09-01
    const mockDoRegister = jest.fn(() => new Promise(() => {}, () => {}))
    const useApi = () => ({
      doRegister: mockDoRegister,
    })

    const w = mount(<AuthContextProvider {...{
      currentUser, setCurrentUser,
      registerModalOpen: true, setRegisterModalOpen: () => {},
      useApi,
    }} ><RegisterModal /></AuthContextProvider>)
    w.find('.Submit').at(1).simulate('click')
    expect(mockDoRegister).toHaveBeenCalled()
    await act(() => new Promise(setImmediate))
  })

})
