import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Products from "./products/Products"
import Product from "./product/Product"

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/:id" component={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
