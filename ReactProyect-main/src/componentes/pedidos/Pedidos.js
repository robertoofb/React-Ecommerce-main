import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Pedidos() {
    const [pedidos, guardarPedidos] = useState([]);
    const ConsultarAPI = async () => {
        const PedidosConsulta = await ClienteAxios.get('/pedido');

        guardarPedidos(PedidosConsulta.data);
        console.log(pedidos);

    }
    useEffect(() => {
        ConsultarAPI();
    }, []);

    const deletePedido = async (id) => {
        try {
            const response = await ClienteAxios.delete('/pedido/'+id+'');
            alert("Pedido Eliminado");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <h2>Pedidos</h2>
            <Link to={"/nuevo-pedido"} class="btn btn-verde nvo-cliente"><i class="fas fa-plus-circle"></i>
                Nuevo Pedido
            </Link>

            <ul class="listado-alumno">
                {pedidos.map(pedido =>
                    <li class="alumno">
                        <div class="info-cliente">
                            <p class="nombre">{"ID Detalle Producto: " + pedido.FkDetalleProducto}</p>
                            <p>{"Dirección: "+pedido.direccion_envio}</p>
                            <p>{"Estado: "+pedido.estado}</p>
                        </div>
                        <div class="acciones">
                            <Link to={"/editar-pedido/"+ pedido.id_pedido} className="btn btn-azul">
                                <i className="fas fa-pen-alt"></i>
                                Editar Pedido
                            </Link>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deletePedido(pedido.id_pedido)}>
                                <i class="fas fa-times"></i>
                                Eliminar Pedido
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Pedidos;