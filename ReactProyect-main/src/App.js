import React, { Fragment } from 'react';
import Header from '../src/componentes/layout/Header';
import Navigation from './componentes/layout/Navigation';
import Clientes from './componentes/clientes/Clientes';
import Pedidos from './componentes/pedidos/Pedidos';
import NuevoPedido from './componentes/pedidos/NuevoPedido';
import EditarPedido from './componentes/pedidos/EditarPedido';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NuevoCliente from './componentes/clientes/NuevoCliente';
import EditarCliente from './componentes/clientes/EditarCliente';
import Rol from './componentes/roles/Rol';
import NuevoRol from './componentes/roles/NuevoRol';
import EditarRol from './componentes/roles/EditarRol';
import Producto from './componentes/productos/Producto';
import NuevoProducto from './componentes/productos/NuevoProducto';
import EditarProducto from './componentes/productos/EditarProducto';
import Detalle_producto from './componentes/detalle_productos/Detalle_producto';
import NuevoDetalle_producto from './componentes/detalle_productos/NuevoDetalle_producto';
import EditarDetalle_Producto from './componentes/detalle_productos/EditarDetalle_Producto';
import Usuarios from './componentes/usuarios/Usuario';
import NuevoUsuario from './componentes/usuarios/NuevoUsuario';
import EditarUsuario from './componentes/usuarios/EditarUsuario';








function App() {
  return (

    <Router>

      <Fragment>
        <Header />

        <div class="grid contenedor contenido-principal">
          <Navigation />
          <main class="caja-contenido col-9">

            <Routes>
              <Route path="/" element={<Clientes />} />
              <Route path="/nuevo-cliente" element={<NuevoCliente />} />
              <Route path="/editar-cliente/:id" element={<EditarCliente />} />
              <Route path="/roles" element={<Rol />} />
              <Route path="/nuevo-rol" element={<NuevoRol />} />
              <Route path="/editar-rol/:id" element={<EditarRol />} />
              <Route path="/productos" element={<Producto />} />
              <Route path="/nuevo-producto" element={<NuevoProducto />} />
              <Route path="/editar-producto/:id" element={<EditarProducto />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/nuevo-pedido" element={<NuevoPedido />} />
              <Route path="/editar-pedido/:id" element={<EditarPedido />} />
              <Route path="/detalle_productos" element={<Detalle_producto />} />
              <Route path="/nuevo-detalle_producto" element={<NuevoDetalle_producto />} />
              <Route path="/editar-detalle_producto/:id" element={<EditarDetalle_Producto />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/nuevo-usuario" element={<NuevoUsuario />} />
              <Route path="/editar-usuario/:id" element={<EditarUsuario />} />






            </Routes>

          </main>
        </div>
      </Fragment>


    </Router>

  );
}
export default App;
