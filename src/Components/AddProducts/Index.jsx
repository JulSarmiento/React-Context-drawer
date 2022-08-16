import React, { useContext } from "react";
import { useState } from "react";
import ProductList from "../../Contexts/ProductList";
import {Modal, Button} from 'react-bootstrap';
import "./index.css"


const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <p>
          Producto agregado!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>X</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default function AddProducts() {

  const [modalShow, setModalShow] = React.useState(false);

  const [products, setProducts] = useContext(ProductList);

  const [values, setValues] = useState({});

  const handlerOnChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  const submit = (e) => {
    e.preventDefault();
    setProducts([...products, values]);
  }

  return (
    <div className="body">

      <div className="body-title-container">
        <h1>¡Bienvenido!</h1>
        <p>Por favor ingresa el producto que deseas incluir en tu lista de compras e indica la categoria del mismo.</p>
      </div>

      <form onSubmit={submit} className="form-container">

        <div className="input-container">
          <label htmlFor="productName">Ingrese el producto:</label>
          <input 
            type="text" 
            name="productName" 
            id="productName" 
            onChange={handlerOnChange} 
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="productQnty">Ingrese la cantida:</label>
          <input 
            type="number" 
            name="productQnty" 
            id="productQnty" 
            required
            onChange={handlerOnChange}   
          />
        </div>

        <div className="select-container">
          <label htmlFor="category">Categoria del producto:</label>
          <select 
            name="category" 
            id="category" 
            onChange={handlerOnChange} 
            defaultValue='default'
            required
          > 
            <option value="default" disabled></option>
            <option value="Lacteo">Lateos</option>
            <option value="Carnes y Pescados">Carnes y Pescados</option>
            <option value="Frutas y Verduras">Frutas y Verduras</option>
            <option value="Abarrotes">Abarrotes</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Harinas y Pan">Harinas y Pan</option>
          </select>
        </div>

        <div className="btn-container">
          <button type="submit" onClick={() => setModalShow(true)}>Agregar</button>
          <button type="reset">Limpiar</button>
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

      </form>
    </div>
  )
}