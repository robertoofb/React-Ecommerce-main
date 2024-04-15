import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';

function NuevoPedido(){
    
    

    //s
    const [pedido, guardarPedidos] = useState({
        "action":"insert",
        "fecha":"",
        "hora":"",
        "estado":"",
        "metodo_pago":"",
        "direccion_envio":"",
        "cliente":"",
        "detalle_producto":"",
    });

    const actualizarState = e =>{
        //console.log(e.target.value);
        guardarPedidos({
            ...pedido,
            [e.target.name]: e.target.value
        })
    }

    const AgregarPedido = e =>{
        e.preventDefault();
        ClienteAxios.post('/pedido', pedido).then(res=>{alert("Pedido Guardado");window.location.reload();console.log(res)});
    }

    const validarPedido = ()=>{
        const{fecha,hora,estado,metodo_pago,direccion_envio,cliente,detalle_producto} = pedido;
        let valido = !fecha.length || !hora.length || !estado.length || !metodo_pago.length || !direccion_envio.length || !cliente.length || !detalle_producto.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Nuevo Pedido</h2>

            {/* <form action="/alumnos" method="POST"> */}
            {/* <form onSubmit={(AgregarAlumno)}> */}
            <form onSubmit={(AgregarPedido)}>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>Fecha del Pedido:</label>
                    <input type="date" placeholder="Fecha del Pedido" name="fecha" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Hora del Pedido:</label>
                    <input type="time" placeholder="Hora del Pedido" name="hora" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Estado del Pedido:</label>
                    <input type="text" placeholder="Estado del Pedido" name="estado" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Metodo de Pago:</label>
                    <input type="text" placeholder="Metodo de Pago" name="metodo_pago" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Direccion del Pedido:</label>
                    <input type="text" placeholder="Direccion del Pedido" name="direccion_envio" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>ID del Cliente:</label>
                    <input type="number" placeholder="Cliente del Pedido" name="cliente" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>ID del Producto:</label>
                    <input type="number" placeholder="Producto del Pedido" name="detalle_producto" onChange={actualizarState} required/>
                </div>

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Pedido" disabled = {validarPedido()}/>
                </div>

            </form>
        </Fragment>
    )
}
export default NuevoPedido;