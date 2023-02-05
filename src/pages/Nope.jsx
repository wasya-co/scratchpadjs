
import React, { useEffect, useState } from 'react'
import {
  CartesianGrid,
  LineChart, Line,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import {
  logg,
} from '$shared'

const Nope = (props) => {
  logg(props, 'Nope')

  const nDays = 4

  const priceMin = 20
  const priceMax = 22

  const yMin = 0
  const yMax = 10

  const [ data, setData ] = useState([])


  let url = 'http://localhost:3001/api/option_price_items/view-by/symbol/GME_121622C5'
  useEffect(() => {
    const cb = async () => {
      const out = await fetch(url).then(r => r.json()).then(r => {
        logg(r, 'rrr')
        setData(r)
      })
      return out
    }
    const out = cb()
    logg(out, 'out 2')
  }, [])

  logg(data, 'data')

  return (<>
    <h1>Hello, world!</h1>

    <LineChart width={800} height={400} data={data}>

      <Line
        dot={false}
        yAxisId="bid"
        type="linear"
        dataKey="bid"
        stroke="#8884d8"
      />
      <YAxis yAxisId="bid" orientation='right' type='number' domain={[priceMin, priceMax]} />

      <Line
        dot={false}
        yAxisId="ask"
        type="linear"
        dataKey="ask"
        stroke="#ff0000"
      />
      <YAxis yAxisId="ask" type='number' domain={[priceMin, priceMax]} />

      <CartesianGrid stroke="#ccc" />
      <XAxis angle={-45} dataKey="date" textAnchor="end" />

      <Tooltip wrapperStyle={{ display: 'none' }} />

    </LineChart>

  </>)
}

export default Nope




// let data = [
//   {
//     "date": "2022-04-01",
//     "open": 188.9,
//     "high": 189.7688,
//     "low": 155.26,
//     "close": 165.0,
//     "volume": 13189560
//   },
//   {
//     "date": "2022-04-04",
//     "open": 166.98,
//     "high": 173.24,
//     "low": 156.51,
//     "close": 170.73,
//     "volume": 4640077
//   },
//   {
//     "date": "2022-04-05",
//     "open": 168.0,
//     "high": 168.43,
//     "low": 152.0,
//     "close": 153.59,
//     "volume": 3956316,
//     "deviation_3_sq": 90.5669444444447,
//     "variance_3": 30.188981481481566
//   },
//   {
//     "date": "2022-04-06",
//     "open": 151.01,
//     "high": 159.2873,
//     "low": 149.7,
//     "close": 156.64,
//     "volume": 4066958,
//     "deviation_3_sq": 13.54240000000026,
//     "variance_3": 34.70311481481499
//   },
// ]
