import React from "react"
import Axios from "axios"

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    const { name, price, description } = this.props.product

    return(
      <form className="form p-3" onSubmit={ this.props.onFormSubmitHandler }>
        <div className="form-group">
          <label htmlFor="product_name">Name</label>
          <input
            name="name"
            id="product_name"
            type="text"
            onChange={ this.props.onChangeHandler }
            value={ name }
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        <div className="row">
          <div className="form-group col-sm-6">
            <label htmlFor="product_price">Price</label>
            <input
              name="price"
              id="product_price"
              type="number"
              min={ 0 }
              onChange={ this.props.onChangeHandler }
              value={ price }
              className="form-control"
              placeholder="Enter Price"
            />
          </div>

          <div className="form-group col-sm-6">
            <label htmlFor="product_description">Description</label>
            <textarea
              name="description"
              id="product_description"
              onChange={ this.props.onChangeHandler }
              value={ description }
              className="form-control"
              placeholder="Enter Description"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    )
  }
}

export default ProductForm
