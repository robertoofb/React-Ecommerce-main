import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Roles() {
    const [roles, guardarRoles] = useState([]);
    const ConsultarAPI = async () => {
        const RolesConsulta = await ClienteAxios.get('/rol');

        guardarRoles(RolesConsulta.data);
        console.log(roles);

    }
    useEffect(() => {
        ConsultarAPI();
    }, []);

    const deleteRol = async (id) => {
        try {
            const response = await ClienteAxios.delete('/rol/'+id+'');
            alert("Rol Eliminado");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <h2>Roles</h2>
            <Link to={"/nuevo-rol"} class="btn btn-verde nvo-cliente"><i class="fas fa-plus-circle"></i>
                Nuevo Rol
            </Link>

            <ul class="listado-alumno">
                {roles.map(rol =>
                    <li class="alumno">
                        <div class="info-cliente">
                            <p class="nombre">{rol.nombre}</p>

                        </div>
                        <div class="acciones">
                            <Link to={"/editar-rol/"+ rol.id_rol} className="btn btn-azul">
                                <i className="fas fa-pen-alt"></i>
                                Editar Rol
                            </Link>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteRol(rol.id_rol)}>
                                <i class="fas fa-times"></i>
                                Eliminar Rol
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Roles;