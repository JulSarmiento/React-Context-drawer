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
          <ul>
            {products.map((product) => {
              return <li key={product.length}><strong>{product.productName}</strong><p>{product.productQnty}</p> <p>{product.category}</p></li>
            })}
          </ul>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}