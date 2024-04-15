import React, { Fragment,useEffect,useState } from "react";
import ClienteAxios from "../../config/axios";
import { useParams } from "react-router-dom";

function EditarUsuario()
{
    let params = useParams();
    console.log(params.id);
 
   const [usuario, guardareditarUsuario] = useState({
        action :'update',
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: '',
        rol: '', 
        id:''+params.id+''    
    });

    const ConsultarAPI = async () => {
        const UsuarioConsulta    = await ClienteAxios.get('/usuarios/'+params.id+'');
        //COLOCAR STATE
        guardareditarUsuario(UsuarioConsulta.data[0]);   
    }
    useEffect( () => {
        ConsultarAPI();
    },[]);

    /**codigo para validar formulario */

   
    const actualizarState = e =>{
        
        guardareditarUsuario({
        ...usuario,
        [e.target.name] : e.target.value
        
       })

    }

    const validarUsuario = () => {
        const {nombre,apellido,correo,contraseña,rol} = usuario;
        let valido = !nombre.length || !apellido.length || !correo.length || !contraseña.length || !rol.length;
        return valido;
    }


    /*enviar post**/

    const ModificarUsuario = e => {
        e.preventDefault();
        ClienteAxios.post('/usuario', usuario)
        .then(res =>{
            console.log(res);
            alert("Usuario Moodificado");
            window.location.reload();        
		});
    }


    return(

        <Fragment>
            <h2>Editar Usuario</h2>

                <form onSubmit={ModificarUsuario}>
                    <legend>Llena todos los campos</legend>


                    <div class="campo">
                        <label>Nombre:</label>
                        <input type="text" placeholder="Nombre del Usuario" 
                        name="nombre" 
                        onChange={actualizarState}
                        value={usuario.nombre}
                        />
                    </div>
                    <div class="campo">
                        <label>Apellido:</label>
                        <input type="text" placeholder="Apellido del Usuario" 
                        name="apellido" 
                        onChange={actualizarState}
                        value={usuario.apellido}
                        />
                    </div>
                    <div class="campo">
                        <label>Correo:</label>
                        <input type="text" placeholder="Correo del Usuario" 
                        name="correo" 
                        onChange={actualizarState}
                        value={usuario.correo}
                        />
                    </div>
                    <div class="campo">
                        <label>Contraseña:</label>
                        <input type="text" placeholder="Contraseña del Usuario" 
                        name="contraseña" 
                        onChange={actualizarState}
                        value={usuario.contraseña}
                        />
                    </div>
                    <div class="campo">
                        <label>ID del Rol:</label>
                        <input type="text" placeholder="Rol del Usuario" 
                        name="rol" 
                        onChange={actualizarState}
                        value={usuario.rol}
                        />
                    </div>

                    <div class="enviar">
                            <input type="submit" class="btn btn-azul" value="Actualizar Usuario"/>
                    </div>

                </form>

        </Fragment>
        
    )
}

export default EditarUsuario;

