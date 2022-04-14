
import PropTypes from 'prop-types'
import React, { Fragment as F, useEfect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

import data from '$data/MSFT-200.json'
import { logg } from "$shared"

export { default as StockWatch } from "./StockWatch"
export { default as StockWatchForm } from "./StockWatchForm"




/**
 * The empty stock_watch
 */
// @TODO: this doesn't make sense, maybe C.emptyStockWarchItem? StockWatch.emptyItem ?
export const stockWatchItem = {
  price: 0.0,
  ticker: 'XOXO',
}

export const Msft200 = (props) => {

  const prices = data.map((d) => d.close)
  const priceMin = Math.min(prices)
  const priceMax = Math.max(prices)

  return <F>
    <h1>MSFT</h1>
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="close" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis type='number' domain={[priceMin, priceMax]} />
    </LineChart>
  </F>
}

const StockWatches = (props) => {
  logg(props, 'StockWatches')

  return <h1>Hello, world!</h1>
};
StockWatches.propTypes = {}

export default StockWatches
