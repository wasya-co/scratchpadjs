
import React from 'react'
import { render, screen } from '@testing-library/react'

import { Msft200 } from './'

describe('Msft200', () => {
  it('renders', () => {
    render(<Msft200 />)
    const el = screen.getByText(/MSFT/i)
    expect(el).toBeInTheDocument()
  })

  it.skip('sets Y-axis min max', () => {
    throw 'not implemented'
  })

})


