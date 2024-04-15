import React, { Fragment,useEffect,useState } from "react";
import ClienteAxios from "../../config/axios";
import { useParams } from "react-router-dom";

function EditarRol()
{
    let params = useParams();
    console.log(params.id);
 
   const [rol, guardareditarRol] = useState({
        action :'update',
        nombre: '', 
        id:''+params.id+''    
    });

    const ConsultarAPI = async () => {
        const RolConsulta    = await ClienteAxios.get('/roles/'+params.id+'');
        //COLOCAR STATE
        guardareditarRol(RolConsulta.data[0]);   
    }
    useEffect( () => {
        ConsultarAPI();
    },[]);

    /**codigo para validar formulario */

   
    const actualizarState = e =>{
        
        guardareditarRol({
        ...rol,
        [e.target.name] : e.target.value
        
       })

    }

    const validarRol = () => {
        const {nombre} = rol;
        let valido = !nombre.length;
        return valido;
    }


    /*enviar post**/

    const ModificarRol = e => {
        e.preventDefault();
        ClienteAxios.post('/rol', rol)
        .then(res =>{
            console.log(res);
            alert("Rol Moodificado");
            window.location.reload();        
		});
    }


    return(

        <Fragment>
            <h2>Editar Rol</h2>

                <form onSubmit={ModificarRol}>
                    <legend>Llena todos los campos</legend>


                    <div class="campo">
                        <label>Nombre:</label>
                        <input type="text" placeholder="Nombre del Rol" 
                        name="nombre" 
                        onChange={actualizarState}
                        value={rol.nombre}
                        />
                    </div>

                    

                    <div class="enviar">
                            <input type="submit" class="btn btn-azul" value="Actualizar Rol"/>
                    </div>

                </form>

        </Fragment>
        
    )
}

export default EditarRol;

