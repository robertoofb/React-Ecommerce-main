import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Usuarios() {
    const [usuarios, guardarUsuarios] = useState([]);
    const ConsultarAPI = async () => {
        const UsuariosConsulta = await ClienteAxios.get('/usuario');

        guardarUsuarios(UsuariosConsulta.data);
        console.log(usuarios);

    }
    useEffect(() => {
        ConsultarAPI();
    }, []);

    const deleteUsuario = async (id) => {
        try {
            const response = await ClienteAxios.delete('/usuario/'+id+'');
            alert("Usuario Eliminado");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Fragment>
            <h2>Usuarios</h2>
            <Link to={"/nuevo-usuario"} class="btn btn-verde nvo-cliente"><i class="fas fa-plus-circle"></i>
                Nuevo Usuario
            </Link>

            <ul class="listado-alumno">
                {usuarios.map(usuario =>
                    <li class="alumno">
                        <div class="info-cliente">
                            <p class="nombre">{usuario.nombre +" "+ usuario.apellido}</p>
                            <p>{usuario.correo}</p>
                        </div>
                        <div class="acciones">
                            <Link to={"/editar-usuario/"+ usuario.id_usuario} className="btn btn-azul">
                                <i className="fas fa-pen-alt"></i>
                                Editar Usuario
                            </Link>
                            <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteUsuario(usuario.id_usuario)}>
                                <i class="fas fa-times"></i>
                                Eliminar Usuario
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}
export default Usuarios;