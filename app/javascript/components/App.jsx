import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Products from "./products/Products"
import Product from "./product/Product"
import Navbar from "./Navbar/Navbar"

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </Router>
  )
}

export default App
