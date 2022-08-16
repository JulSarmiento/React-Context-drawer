import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProductList from '../../Contexts/ProductList';

import './index.css'

export default function Drawer() {

  const [products] = useContext(ProductList);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let abarrotes =  products.filter(product =>  product.category === "Abarrotes");
  let carnesyPescados =  products.filter(product =>  product.category === "Carnes y Pescados");
  let lacteos =  products.filter(product =>  product.category === "Lacteo");
  let hariasyPan =  products.filter(product =>  product.category === "Harinas y Pan");
  let frutasyVerduras=  products.filter(product =>  product.category === "Frutas y Verduras");
  let bebidas =  products.filter(product =>  product.category === "Bebidas");


  //Pendiente clasificar los productos por la categoria

  return(
    <div>
      <Button className='drawer-btn' onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='drawer-title'>Lista de Compras</Offcanvas.Title>
          <span className="material-symbols-outlined">
          shopping_basket
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {/* Product List */}

          {
            abarrotes.length === 0? [] : 
            <div className='category-box'>
              <h2>Abarrotes</h2>
              <ul>
                {abarrotes.map((product) => {
                  return <li key={products.length}><strong>{product.productName}</strong><p>{product.productQnty}</p> </li>
                })}
              </ul>
            </div>
          }

          {
            carnesyPescados.length === 0 ? [] :
            <div className='category-box'>
              <h2>Carnes y Perscados</h2>
              <ul>
                {carnesyPescados.map((product) => {
                  return <li key={products.length}><strong>{product.productName}</strong><p>{product.productQnty}</p> </li>
                })}
              </ul>
            </div>
          }

          {
            frutasyVerduras.length === 0 ? [] :
            <div className='category-box'>
              <h2>Frutas y Verduras</h2>

              <ul>
                {frutasyVerduras.map((product) => {
                  return <li key={products.length}><strong>{product.productName}</strong><p>{product.productQnty}</p> </li>
                })}
              </ul>
            </div>
          }

          {
            hariasyPan.length === 0 ? [] : 
            <div className='category-box'>
              <h2>Harinas y Pan</h2>

              <ul>
                {hariasyPan.map((product) => {
                  return <li key={products.length}><strong>{product.productName}</strong><p>{product.productQnty}</p> </li>
                })}
              </ul>
            </div>
          }

          {
            lacteos.length === 0 ? [] :
            <div className='category-box'>
              <h2>Lacteos</h2>

              <ul>
                {lacteos.map((product) => {
                  return <li key={products.length}><strong>{product.productName}</strong><p>{product.productQnty}</p> </li>
                })}
              </ul>
            </div>
          }

          {
            bebidas.length === 0 ? [] :
            <div className='category-box'>
              <h2>Bebidas</h2>

              <ul>
                {bebidas.map((product) => {
                  return <li key={products.length}><strong>{product.productName}</strong><p>{product.productQnty}</p> </li>
                })}
              </ul>
            </div>
          }

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}