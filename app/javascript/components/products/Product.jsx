import React from "react"
import { Link } from "react-router-dom"

const Product = (props) => {
  const { name, price, description } = props.attributes
  console.log(props)

  return(
    <tr>
      <td>{ name }</td>
      <td>{ description }</td>
      <td>${ price }</td>
      <td>
        <Link to={`/products/${props.id}`} className="btn btn-primary">View</Link>
      </td>
    </tr>
  )
}

export default Product
