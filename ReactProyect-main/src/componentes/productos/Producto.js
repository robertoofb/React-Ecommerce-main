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
            <Link to={"/nuevo-cliente"} class="btn btn-verde nvo-cliente"><i class="fas fa-plus-circle"></i>
                Nuevo Producto
            </Link>

            <ul class="listado-alumno">
                {productos.map(producto =>
                    <li class="alumno">
                        <div class="info-cliente">
                            <p class="nombre">{producto.nombre}</p>
                            <p>{producto.descripcion}</p>
                            <img src={producto.imagen} alt="Imagen del producto" />
                        </div>
                        <div class="acciones">
                            <a href="#" class="btn btn-azul">
                                <i class="fas fa-pen-alt"></i>
                                Editar Cliente
                            </a>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteProducto(producto.id_producto)}>
                                <i class="fas fa-times"></i>
                                Eliminar Cliente
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Productos;