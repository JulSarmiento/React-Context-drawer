import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './index.css'

export default function Drawer() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      <Button className='drawer-btn' onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='drawer-title'>Lista de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {/* Product List */}
          <p className="mb-0">
            Lista vacia.
          </p>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}