
import PropTypes from 'prop-types'
import React, { Fragment as F, useEfect, useState } from 'react'
import styled from 'styled-components'


import { logg } from "$shared"
import StockWatch from './StockWatch'
import StockWatchForm from './StockWatchForm'


/**
 * The empty stock_watch
 */
// @TODO: this doesn't make sense, maybe C.emptyStockWarchItem? StockWatch.emptyItem ?
export const stockWatchItem = {
  price: 0.0,
  ticker: 'XOXO',
}


const W0 = styled.div``;

/**
 * StockWatches
**/
const StockWatches = (props) => {
  logg(props, 'StockWatches')

  return <W0>
    <StockWatchForm item={{}} />
  </W0>
};
StockWatches.propTypes = {}

export default StockWatches
export {
  StockWatch,
  StockWatchForm,
}
