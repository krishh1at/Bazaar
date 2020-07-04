import React from "react"
import Axios from "axios"

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: { data: { attributes: {} } },
      loaded: false
    }
  }

  componentDidMount() {
    Axios.get(`/api/v1/products/${this.props.match.params.id}`)
    .then(resp => {
      this.setState({ product: resp.data, loaded: true })
    })
  }

  render() {
    const { name, price, description } = this.state.product.data.attributes

    return(
      <div className="bg-light">
        {
          this.state.loaded &&
          <div className="p-3">
            <div className="font-weight-bold">{ name }</div>
            <div className="text-dark">{ description }</div>
            <div className="text-dark">Price: ${ price }</div>
          </div>
        }
      </div>
    );
  }
}

export default Product;
