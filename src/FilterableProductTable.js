import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: '',
      inStockOnly: false,
    }
  }

  onKeywordChange = (value) => {
    this.setState({ keyword: value })
  }

  onInStockChange = (value) => {
    this.setState({ inStockOnly: value })
  }

  render() {
    return (
      <div>
        <SearchBar
          keyword={this.state.keyword}
          inStockOnly={this.state.inStockOnly}
          onKeywordChange={this.onKeywordChange}
          onInStockChange={this.onInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filters={{
            keyword: this.state.keyword,
            inStockOnly: this.state.inStockOnly
          }}
        />
      </div>
    )
  }
}
