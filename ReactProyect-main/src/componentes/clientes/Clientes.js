import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Clientes() {
    const [clientes, guardarClientes] = useState([]);
    const ConsultarAPI = async () => {
        const ClientesConsulta = await ClienteAxios.get('/cliente');

        guardarClientes(ClientesConsulta.data);
        console.log(clientes);

    }
    useEffect(() => {
        ConsultarAPI();
    }, []);

    const deleteCliente = async (id) => {
        try {
            const response = await ClienteAxios.delete('/cliente/'+id+'');
            alert("Cliente Eliminado");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <h2>Clientes</h2>
            <Link to={"/nuevo-cliente"} class="btn btn-verde nvo-cliente"><i class="fas fa-plus-circle"></i>
                Nuevo cliente
            </Link>

            <ul class="listado-alumno">
                {clientes.map(cliente =>
                    <li class="alumno">
                        <div class="info-cliente">
                            <p class="nombre">{cliente.FkUsuario}</p>
                            <p class="carrera">{cliente.direccion}</p>
                            <p>{cliente.celular}</p>
                        </div>
                        <div class="acciones">
                            <a href="#" class="btn btn-azul">
                                <i class="fas fa-pen-alt"></i>
                                Editar Cliente
                            </a>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteCliente(cliente.id_producto)}>
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
export default Clientes;