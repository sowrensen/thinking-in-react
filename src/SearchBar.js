import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <form>
        <input type="text" name='keyword'  placeholder='Search...' />
        <p>
          <input type="checkbox" /> {' '} Only show product in stock
        </p>
      </form>
    )
  }
}
