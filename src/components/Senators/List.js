import React, { Fragment } from 'react'
import Senator from './Senator'




/**
 * Presentational Component
 */
export default (props) => (
  <Fragment>
    { props.senators.map(s => (
      <Senator key={s.person.cspanid} senator={s} />
    ))}
  </Fragment>
)
