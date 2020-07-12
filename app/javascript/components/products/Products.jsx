import React from "react"
import Axios from "axios"
import ProductForm from "./ProductForm"
import Product from "./Product"

class Products extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [{ attributes: {} }],
      product: {},
      loaded: false
    }
  }

  onChangeHandler = (e) => {
    const newProduct = Object.assign({}, this.state.product, {[e.target.name]: e.target.value})
    this.setState({ product: newProduct })
  }

  onFormSubmitHandler = (e) => {
    e.preventDefault()
    const csrfToken = document.querySelector('[name=csrf-token]').content
    Axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    Axios.post(`/api/v1/products`, { product: this.state.product })
    .then(resp => {
      console.log(resp)
      const products = this.state.products
      const updatedProductsCount = products.unshift(resp.data.data)
      this.setState({ products: products, product: { name: '', price: '', description: '' } })
    })
    .catch(resp => {
      console.log(resp)
    })
  }

  componentDidMount() {
    Axios.get(`/api/v1/products`)
    .then(resp => {
      console.log(resp)
      this.setState({ products: resp.data.data, loaded: true })
    })
    .catch(resp => {
      console.log(resp)
    })
  }

  render() {
    const products = this.state.products.map(product => {
      return(
        <Product attributes={ product.attributes } id={ product.id } key={ product.id } />
      )
    })

    return(
      <div className="container my-4">
        <div className="clearfix">
          <h1 className="float-left">{ this.state.products.length }: Products available...</h1>
          <ProductForm
            onFormSubmitHandler={ this.onFormSubmitHandler }
            onChangeHandler={ this.onChangeHandler }
            product={ this.state.product }
          />
        </div>

        <div className="mx-auto">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.loaded &&
                products
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Products
