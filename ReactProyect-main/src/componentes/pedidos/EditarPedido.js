import React, { Fragment,useEffect,useState } from "react";
import ClienteAxios from "../../config/axios";
import { useParams } from "react-router-dom";

function EditarPedido()
{
    let params = useParams();
    console.log(params.id);
 
   const [pedido, guardareditarPedido] = useState({
        action :'update',
        fecha: '', 
        hora: '', 
        estado: '', 
        metodo_pago: '', 
        direccion_envio: '', 
        cliente: '', 
        detalle_producto: '', 
        id:''+params.id+''    
    });

    const ConsultarAPI = async () => {
        const PedidoConsulta    = await ClienteAxios.get('/pedidos/'+params.id+'');
        //COLOCAR STATE
        guardareditarPedido(PedidoConsulta.data[0]);   
    }
    useEffect( () => {
        ConsultarAPI();
    },[]);

    /**codigo para validar formulario */

   
    const actualizarState = e =>{
        
        guardareditarPedido({
        ...pedido,
        [e.target.name] : e.target.value
        
       })

    }

    const validarPedido = () => {
        const {fecha,hora,estado,metodo,direccion,cliente,producto} = pedido;
        let valido = !fecha.length || !hora.length || !estado.length || !metodo.length || !direccion.length || !cliente.length || !producto.length;
        return valido;
    }


    /*enviar post**/

    const ModificarPedido = e => {
        e.preventDefault();
        ClienteAxios.post('/pedido', pedido)
        .then(res =>{
            console.log(res);
            alert("Pedido Moodificado");
            window.location.reload();        
		});
    }


    return(

        <Fragment>
            <h2>Editar Pedido</h2>

                <form onSubmit={ModificarPedido}>
                    <legend>Llena todos los campos</legend>


                    <div class="campo">
                        <label>Fecha:</label>
                        <input type="date" placeholder="Fecha del Pedido" 
                        name="fecha" 
                        onChange={actualizarState}
                        value={pedido.fecha ? pedido.fecha.slice(0, 10) : ''}
                        />
                    </div>
                    <div class="campo">
                        <label>Hora:</label>
                        <input type="time" placeholder="Hora del Pedido" 
                        name="hora" 
                        onChange={actualizarState}
                        value={pedido.hora}
                        />
                    </div>
                    <div class="campo">
                        <label>Estado:</label>
                        <input type="text" placeholder="Estado del Pedido" 
                        name="estado" 
                        onChange={actualizarState}
                        value={pedido.estado}
                        />
                    </div>
                    <div class="campo">
                        <label>Metodo:</label>
                        <input type="text" placeholder="Metodo de Pago" 
                        name="metodo_pago" 
                        onChange={actualizarState}
                        value={pedido.metodo_pago}
                        />
                    </div>
                    <div class="campo">
                        <label>Direccion:</label>
                        <input type="text" placeholder="Direccion del Pedido" 
                        name="direccion_envio" 
                        onChange={actualizarState}
                        value={pedido.direccion_envio}
                        />
                    </div>
                    <div class="campo">
                        <label>ID del Cliente:</label>
                        <input type="number" placeholder="ID del Cliente" 
                        name="cliente" 
                        onChange={actualizarState}
                        value={pedido.cliente}
                        />
                    </div>
                    <div class="campo">
                        <label>ID del Producto:</label>
                        <input type="number" placeholder="ID del Producto" 
                        name="detalle_producto" 
                        onChange={actualizarState}
                        value={pedido.detalle_producto}
                        />
                    </div>

                    <div class="enviar">
                            <input type="submit" class="btn btn-azul" value="Actualizar Pedido"/>
                    </div>

                </form>

        </Fragment>
        
    )
}

export default EditarPedido;

