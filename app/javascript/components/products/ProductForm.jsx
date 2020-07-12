import React from "react"
import Axios from "axios"
import FormModal from "./FormModal"

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <FormModal
        onFormSubmitHandler={ this.props.onFormSubmitHandler }
        onChangeHandler={ this.props.onChangeHandler }
        product={ this.props.product }
        title="Add Product"
      />
    )
  }
}

export default ProductForm
