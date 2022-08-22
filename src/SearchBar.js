import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" name='keyword' onChange={(event) => this.props.onKeywordChange(event.target.value)} placeholder='Search...' />
        <p>
          <input type="checkbox" onChange={(event) => this.props.onInStockChange(event.target.checked)} /> {' '} Only show product in stock
        </p>
      </form>
    )
  }
}
