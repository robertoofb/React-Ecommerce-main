import React from 'react';
//para ruteo performance
import {Link} from 'react-router-dom';
function Navigation(){
    return (

        <aside class="sidebar col-3">
            <h2>Administración</h2>

            <nav class="navegacion">
                
                <Link to={"/"} class="alumnos">Clientes</Link>
                <Link to={"/usuarios"} class="alumnos">Usuarios</Link>
                <Link to={"/productos"} class="carreras">Productos</Link>
                <Link to={"/detalle_productos"} class="calificaciones">Detalles de Producto</Link>
                <Link to={"/pedidos"} class="carreras">Pedidos</Link>
                <Link to={"/roles"} class="alumnos">Roles</Link>


            </nav>
        </aside>

    )
}
export default Navigation;