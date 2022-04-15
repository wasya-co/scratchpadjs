
import PropTypes from 'prop-types'
import React, { Fragment as F } from 'react'
import {
  useHistory, useParams,
} from 'react-router-dom'
import {
  CartesianGrid,
  LineChart, Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import styled from 'styled-components'

import _data from '$data/GME-300.json'
import {
  logg,
} from '$shared'

const nDays = 30
const data = _data.slice(nDays+nDays-2)

const W0 = styled.div``;

/**
 * StockChart
**/
const StockChart = (props) => {
  // logg(props, 'StockChart')

  const params = useParams()
  const { ticker } = params

  const prices = data.map((d) => d.close)
  const priceMin = Math.min(...prices)
  const priceMax = Math.max(...prices)

  const variances = data.map((d) => d[`variance_${nDays}`])
  const varianceMin = Math.min(...variances)
  const varianceMax = Math.max(...variances)

  return <W0>
    <h1>{ticker}</h1>
    <LineChart width={800} height={400} data={data}>

      <Line
        dot={false}
        yAxisId="close"
        type="linear"
        dataKey="close"
        stroke="#8884d8"
      />
      <YAxis yAxisId="close" orientation='right' type='number' domain={[priceMin, priceMax]} />

      <Line
        dot={false}
        yAxisId="variance"
        type="linear"
        dataKey={`variance_${nDays}`}
        stroke="#ff0000"
      />
      <YAxis yAxisId="variance" type='number' domain={[varianceMin, varianceMax]} />

      <CartesianGrid stroke="#ccc" />
      <XAxis angle={-45} dataKey="date" textAnchor="end" />

      <Tooltip wrapperStyle={{ display: 'none' }} />

    </LineChart>
  </W0>
}
StockChart.propTypes = {}

export default StockChart
