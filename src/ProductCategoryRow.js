import React from "react";

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr style={{ textAlign: 'left' }}>
        <th colSpan={2}>{this.props.category}</th>
      </tr>
    )
  }
}

export default ProductCategoryRow
