
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

const Nope2 = (props) => {
  logg(props, 'Nope 2')

  let resp

  const [ yMinMax, setYMinMax ] = useState([0, 0])
  const [ xMinMax, setXMinMax ] = useState([0, 0])
  const [ data, setData ] = useState([])


  let url = 'http://localhost:3001/api/option_price_items/view-by/symbol/GME_021023P20.5'
  useEffect(() => {
    const cb = async () => {
      await fetch(url).then(r => r.json()).then(r => {

        const bids = r.map( i => i.bid )
        resp = [ Math.min.apply( Math, bids ) / 1.2, Math.max.apply( Math, bids ) * 1.2 ]
        setYMinMax(resp)

        const seconds = r.map( i => i.seconds )
        resp = [ Math.min.apply( Math, seconds ), Math.max.apply( Math, seconds ) ]
        logg(resp, 'resp 2')
        setXMinMax(resp)

        setData(r)
      })
    }
    cb()
  }, [])

  logg(data, 'dataz')

  return (<>
    <h1>NOPE-2: GME_021023P20.5</h1>

    <LineChart width={800} height={500} data={data}>

      <Line
        dot={false}
        yAxisId="bid"
        type="linear"
        dataKey="bid"
        stroke="#8884d8"
      />
      <YAxis yAxisId="bid" orientation='right' type='number' domain={yMinMax} />

      <Line
        dot={false}
        yAxisId="ask"
        type="linear"
        dataKey="ask"
        stroke="#ff0000"
      />
      <YAxis yAxisId="ask" type='number' domain={yMinMax} />

      <CartesianGrid stroke="#ccc" />
      <XAxis angle={45} dataKey="seconds" textAnchor="end"
        type="number"
        padding="gap"
        tickCount={40}
        domain={xMinMax}
      />

      <Tooltip wrapperStyle={{ display: 'none' }} />

    </LineChart>

  </>)
}

export default Nope2




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
