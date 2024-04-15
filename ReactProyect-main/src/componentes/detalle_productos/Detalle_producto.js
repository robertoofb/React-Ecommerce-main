import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Detalle_Producto() {
    const [detalle_productos, guardarDetalle_productos] = useState([]);
    const ConsultarAPI = async () => {
        const Detalle_productosConsulta = await ClienteAxios.get('/detalle_producto');

        guardarDetalle_productos(Detalle_productosConsulta.data);
        console.log(guardarDetalle_productos);

    }
    useEffect(() => {
        ConsultarAPI();
    }, []);

    const deleteDetalle_productos = async (id) => {
        try {
            const response = await ClienteAxios.delete('/detalle_producto/'+id+'');
            alert("Detalle de Producto Eliminado");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <h2>Detalle de Productos</h2>
            <Link to={"/nuevo-detalle_producto"} class="btn btn-verde nvo-cliente"><i class="fas fa-plus-circle"></i>
                Nuevo Detalle de Producto
            </Link>

            <ul class="listado-alumno">
                {detalle_productos.map(detalle_producto =>
                    <li class="alumno" key = {detalle_producto.id_detalle_producto}>
                        <div class="info-cliente">
                            <p class="nombre">{"ID Producto: " + detalle_producto.FkProducto}</p>
                            <p>{"Cantidad: " + detalle_producto.cantidad}</p>
                            <p>{"Precio Unidad: " + detalle_producto.precio}</p>
                            <p>{"Total: " + detalle_producto.total}</p>
                        </div>
                        <div class="acciones">
                            <Link to={"/editar-detalle_producto/"+ detalle_producto.id_detalle_producto} className="btn btn-azul">
                                <i className="fas fa-pen-alt"></i>
                                Editar Detalle de Producto
                            </Link>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteDetalle_productos(detalle_producto.id_detalle_producto)}>
                                <i class="fas fa-times"></i>
                                Eliminar Detalle de Producto
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Detalle_Producto;