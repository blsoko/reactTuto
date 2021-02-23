import React, { Fragment, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);

  const [ carrito, agregarProducto ] = useState([]);

  const fdate = new Date().getFullYear();
  return (
    <Fragment>
      <Header
      titulo = 'Storage Chachis'
      />
       <h1>Lista de Productos</h1>
        {productos.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                productos={productos}
                carrito={carrito}
                agregarProducto={agregarProducto}

            />
        ))}
      <Carrito
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
      <Footer
      fdate = {fdate}
      />
    </Fragment>
  );
}

export default App;
