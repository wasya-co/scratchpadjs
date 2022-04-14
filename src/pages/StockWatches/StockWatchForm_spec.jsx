
import React from 'react'
import { render, screen } from '@testing-library/react'
import StockWatchForm from './StockWatchForm'

test('renders', () => {
  render(<StockWatchForm item={{}} />)
  const el = screen.getByText(/when/i)
  expect(el).toBeInTheDocument()
})
