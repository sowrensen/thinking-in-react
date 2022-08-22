import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
  render() {
    const rows = []
    let lastCategory = null
    const filters = this.props.filters

    this.props.products.forEach(product => {
      // Filter out products by searched keyword
      if (product.name.toLowerCase().indexOf(filters.keyword.toLowerCase()) === -1) {
        return
      }

      // Filter out products by stock status
      if (filters.inStockOnly && !product.stocked) {
        return
      }

      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
      }

      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category
    })

    return (
      <table>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default ProductTable
