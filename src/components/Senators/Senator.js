import React, { Fragment } from 'react'

export default ({ senator }) => (
  <div style={{ background: '#cdcdcd', border: '1px solid red', margin: '10px'}}>
    <h1>{senator.person.firstname} {senator.person.lastname}</h1>
  </div>
)
