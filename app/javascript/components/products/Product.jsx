import React from "react"

const Product = (props) => {
  const { name, price, description } = props.attributes

  return(
    <div className="p-3 bg-light col-sm-6 col-md-4 col-lg-3">
      <div className="p-3 bg-dark text-center">
        <div className="text-light font-weight-bold">{ name }</div>
        <div className="text-light">{ description }</div>
        <div className="text-light">Price: ${ price }</div>
      </div>
    </div>
  )
}

export default Product
