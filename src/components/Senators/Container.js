import React, { Component, Fragment } from 'react'
import Senators from './List'
import SearchForm from './Form'

const getSenators = async url =>
  await fetch(url).then(response => response.json())

const filterByName = (senators, name) => senators.filter(senator =>
  senator.person.firstname.indexOf(name) > -1 ||
  senator.person.lastname.indexOf(name) > -1)

export default class extends Component {

  state = {
    senators: [],
  }

  async componentDidMount() {
    const response = await getSenators('https://www.govtrack.us/api/v2/role?current=true&role_type=senator')
    this.setState({ senators: response.objects})
  }

  onFilterHandled = name => {
    const senators = filterByName(this.state.senators, name)
    this.setState({ senators })
  }


  render() {
    return (
      <Fragment>
        <SearchForm onFilter={this.onFilterHandled} />
        <Senators senators={this.state.senators} />
      </Fragment>
    )
  }

}
