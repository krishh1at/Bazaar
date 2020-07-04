import React from "react"
import Axios from "axios"
import ProductForm from "./Form"
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
        <Product attributes={ product.attributes } key={ product.id } />
      )
    })

    return(
      <div className="p-3 bg-dark">
        <div className="bg-secondary mb-5">
          <ProductForm
            product={ this.state.product }
            onChangeHandler={ this.onChangeHandler }
            onFormSubmitHandler={ this.onFormSubmitHandler }
          />
        </div>
        <p className="text-center text-light font-weight-bold">{ this.state.products.length }: Products available...</p>
        <div className="p-3 bg-light row mx-auto">
          {
            this.state.loaded &&
            products
          }
        </div>
      </div>
    );
  }
}

export default Products;
