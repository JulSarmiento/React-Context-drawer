import React from "react";
import "./index.css"

export default function AddProducts() {
  return (
    <div className="body">

      <div className="body-title-container">
        <h1>¡Bienvenido!</h1>
        <p>Por favor ingresa el producto que deseas incluir en tu lista de compras e indica la categoria del mismo.</p>
      </div>

      <form action="" className="form-container">

        <div className="input-container">
          <label htmlFor="productName">Ingrese el producto:</label>
          <input type="text" name="productName" id="productName" placeholder="Huevos "/>
        </div>

        <div className="input-container">
          <label htmlFor="productQnty">Ingrese la cantida:</label>
          <input type="number" name="productQnty" id="productQnty" placeholder="2 "/>
        </div>

        <div className="input-container">
          <label htmlFor="productCategories">Categoria del producto:</label>
          <select name="productCategories" id="productCategories" >
            <option selected disabled></option>
            <option value="Lateo">Lateos</option>
            <option value="Carnes">Carnes</option>
            <option value="Frutas y Verduras">Frutas y Verduras</option>
            <option value="Abarrotes">Abarrotes</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Harinas y Pan">Harinas y Pan</option>
          </select>
        </div>

        <div className="btn-container">
          <button>Agregar</button>
          <button type="reset">Limpiar</button>
        </div>

      </form>
    </div>
  )
}