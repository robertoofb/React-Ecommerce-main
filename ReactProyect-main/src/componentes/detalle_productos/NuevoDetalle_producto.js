import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';

function NuevoDetalle_producto(){
    
    

    //s
    const [detalle_producto, guardarDetalle_productos] = useState({
        "action":"insert",
        "producto":"",
        "cantidad": "", 
        "precio": "", 
        "total": ""
    });

    const actualizarState = e =>{
        //console.log(e.target.value);
        guardarDetalle_productos({
            ...detalle_producto,
            [e.target.name]: e.target.value
        })
    }

    const AgregarDetalle_producto = e =>{
        e.preventDefault();
        ClienteAxios.post('/detalle_producto', detalle_producto).then(res=>{alert("Detale del Producto Guardado");window.location.reload();console.log(res)});
    }

    const validarDetalle_producto = ()=>{
        const{producto,cantidad,precio,total} = detalle_producto;
        let valido = !producto.length || !cantidad.length || !precio.length || !total.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Nuevo Detalle de Producto</h2>

            {/* <form action="/alumnos" method="POST"> */}
            {/* <form onSubmit={(AgregarAlumno)}> */}
            <form onSubmit={(AgregarDetalle_producto)}>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>ID del Producto:</label>
                    <input type="number" placeholder="ID del Producto" name="producto" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Cantidad:</label>
                    <input type="number" placeholder="Cantidad del Producto" name="cantidad" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Precio:</label>
                    <input type="number" placeholder="Precio del Producto" name="precio" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Total:</label>
                    <input type="number" placeholder="Precio total del Producto" name="total" onChange={actualizarState} required/>
                </div>

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Detalle del Producto" disabled = {validarDetalle_producto()}/>
                </div>

            </form>
        </Fragment>
    )
}
export default NuevoDetalle_producto;