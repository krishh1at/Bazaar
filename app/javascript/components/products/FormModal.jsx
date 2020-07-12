import React, { useState, useEffect } from "react"
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap"

const FormModal = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { name, price, description } = props.product

  return (
    <>
      <Button variant="primary float-right" onClick={handleShow}>Add Product</Button>

      <Modal show={show} onHide={handleClose}>
        <form className="form" onSubmit={ props.onFormSubmitHandler }>
          <Modal.Header closeButton className="bg-primary text-white">
            <Modal.Title>{ props.title }</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <div className="form-group">
                <label htmlFor="product_name">Name</label>
                <FormControl
                  name="name"
                  id="product_name"
                  type="text"
                  onChange={ props.onChangeHandler }
                  value={ name }
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="product_price">Price</label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="price"
                      id="product_price"
                      type="number"
                      min={ 0 }
                      onChange={ props.onChangeHandler }
                      value={ price }
                      placeholder="Enter Price"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </InputGroup>
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="product_description">Description</label>
                  <textarea
                    name="description"
                    id="product_description"
                    onChange={ props.onChangeHandler }
                    value={ description }
                    className="form-control"
                    placeholder="Enter Description"
                  />
                </div>
              </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button type="submit" variant="primary" onClick={handleClose}>Add Product</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default FormModal
