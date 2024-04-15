import React, { Fragment,useEffect,useState } from "react";
import ClienteAxios from "../../config/axios";
import { useParams } from "react-router-dom";

function EditarCliente()
{
    let params = useParams();
    console.log(params.id);
 
    const[Usuarios, guardarUsuario]           = useState([]);

   const [cliente, guardareditarCliente] = useState({
        action :'update',
        usuario: '', 
        direccion: '', 
        celular: '', 
        id:''+params.id+''    
    });

    const ConsultarAPI = async () => {
        const UsuarioConsulta   = await ClienteAxios.get('/usuario');
        const ClienteConsulta    = await ClienteAxios.get('/clientes/'+params.id+'');
        //COLOCAR STATE
        guardarUsuario(UsuarioConsulta.data);
        guardareditarCliente(ClienteConsulta.data[0]);   
    }
    useEffect( () => {
        ConsultarAPI();
    },[]);

    /**codigo para validar formulario */

   
    const actualizarState = e =>{
        
        guardareditarCliente({
        ...cliente,
        [e.target.name] : e.target.value
        
       })

    }

    const validarCliente = () => {
        const {usuario,direccion,celular} = cliente;
        let valido = !usuario.length || !direccion.length || !celular.length;
        return valido;
    }


    /*enviar post**/

    const ModificarCliente = e => {
        e.preventDefault();
        ClienteAxios.post('/cliente', cliente)
        .then(res =>{
            console.log(res);
            alert("Cliente Moodificado");
            window.location.reload();        
		});
    }


    return(

        <Fragment>
            <h2>Editar Cliente</h2>

                <form onSubmit={ModificarCliente}>
                    <legend>Llena todos los campos</legend>


                    <div class="campo">
                        <label>Cliente:</label>
                        <select name="usuario" onChange={actualizarState}>
                            {Usuarios.map (usuario =>
                            <option value={usuario.id_usuario}  selected={usuario.id_usuario === cliente.usuario}>{usuario.nombre}</option>
                            )}
                        </select>
                    </div>
                    <div class="campo">
                        <label>Direccion:</label>
                        <input type="text" placeholder="Direccion del cliente" 
                        name="direccion" 
                        onChange={actualizarState}
                        value={cliente.direccion}
                        />
                    </div>
                    <div class="campo">
                        <label>Celular:</label>
                        <input type="text" placeholder="Celular del cliente" 
                        name="celular" 
                        onChange={actualizarState}
                        value={cliente.celular}
                        />
                    </div>

                    
                    <div class="enviar">
                            <input type="submit" class="btn btn-azul" value="Actualizar Cliente"/>
                    </div>

                </form>

        </Fragment>
        
    )
}

export default EditarCliente;

