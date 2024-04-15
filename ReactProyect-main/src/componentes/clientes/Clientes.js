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
                    <li class="alumno" key = {cliente.id_cliente}>
                        <div class="info-cliente">
                            <p class="nombre">{"ID usuario: " + cliente.FkUsuario}</p>
                            <p>{"Direccion: " + cliente.direccion}</p>
                            <p>{"Celular: " + cliente.celular}</p>
                        </div>
                        <div class="acciones">
                            <Link to={"/editar-cliente/"+ cliente.id_cliente} className="btn btn-azul">
                                <i className="fas fa-pen-alt"></i>
                                Editar Cliente
                            </Link>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteCliente(cliente.id_cliente)}>
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