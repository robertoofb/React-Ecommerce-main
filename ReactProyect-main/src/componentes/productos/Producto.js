import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Productos() {
    const [productos, guardarProductos] = useState([]);
    const ConsultarAPI = async () => {
        const ProductosConsulta = await ClienteAxios.get('/producto');

        guardarProductos(ProductosConsulta.data);
        console.log(productos);

    }
    useEffect(() => {
        ConsultarAPI();
    }, []);

    const deleteProducto = async (id) => {
        try {
            const response = await ClienteAxios.delete('/producto/'+id+'');
            alert("Producto Eliminado");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <h2>Productos</h2>
            <Link to={"/nuevo-producto"} class="btn btn-verde nvo-cliente"><i class="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>

            <ul class="listado-alumno">
                {productos.map(producto =>
                    <li class="alumno">
                        <div class="info-cliente">
                            <p class="nombre">{"Nombre: " + producto.nombre}</p>
                            <p>{"Descripcion: " + producto.descripcion}</p>
                            <p>{"Precio: $ " + producto.precio}</p>
                            {/* <img src={producto.imagen} alt="Imagen del producto" /> */}
                        </div>
                        <div class="acciones">
                            <Link to={"/editar-producto/"+ producto.id_producto} className="btn btn-azul">
                                <i className="fas fa-pen-alt"></i>
                                Editar Producto
                            </Link>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteProducto(producto.id_producto)}>
                                <i class="fas fa-times"></i>
                                Eliminar Producto
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Productos;