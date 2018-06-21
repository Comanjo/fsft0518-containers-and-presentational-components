import React, { Fragment, Component } from 'react'

export default class extends Component {

  state = {
    filter: ''
  }

  render(){
    return (
      <Fragment>
        <form onSubmit={e => {
          e.preventDefault()
          this.props.onFilter(this.state.filter)
        }}>
          <input type="search" name="filter" onChange={e => this.setState({ filter: e.target.value })} />
          <button type="submit">Search</button>
        </form>
      </Fragment>
    )
  }
}
