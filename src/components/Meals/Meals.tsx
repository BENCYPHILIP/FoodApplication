import React, { Fragment } from 'react'
import MelasSummary from './MelasSummary'
import AvailableMeals from './AvailableMeals'
function Meals() {
  return (
    <Fragment>
      <MelasSummary/>
      <AvailableMeals/>
    </Fragment>
  )
}

export default Meals