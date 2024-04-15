import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';

function NuevoProducto(){
    
    

    //s
    const [producto, guardarProductos] = useState({
        "action":"insert",
        "nombre":"",
        "descripcion":"",
        "precio":"",
        "talla":"",
        "color":"",
        "categoria":"",
        "existencia":"",
        "imagen":""
    });

    const actualizarState = e =>{
        //console.log(e.target.value);
        guardarProductos({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const AgregarProducto = e =>{
        e.preventDefault();
        ClienteAxios.post('/producto', producto).then(res=>{alert("Producto Guardado");window.location.reload();console.log(res)});
    }

    const validarProducto = ()=>{
        const{nombre,descripcion,precio,talla,color,categoria,existencia,imagen} = producto;
        let valido = !nombre.length || !descripcion.length || !precio.length || !talla.length || !color.length || !categoria.length || !existencia.length || !imagen.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Nuevo Producto</h2>

            {/* <form action="/alumnos" method="POST"> */}
            {/* <form onSubmit={(AgregarAlumno)}> */}
            <form onSubmit={(AgregarProducto)}>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre del Producto" name="nombre" onChange={actualizarState} required/>
                </div>
            
                <div class="campo">
                    <label>Descripcion:</label>
                    <input type="text" placeholder="Descripcion del Producto" name="descripcion" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Precio:</label>
                    <input type="number" placeholder="Precio del Producto" name="precio" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Talla:</label>
                    <input type="text" placeholder="Talla del Producto" name="talla" onChange={actualizarState} required/>
                </div>
            
                <div class="campo">
                    <label>Color:</label>
                    <input type="text" placeholder="Color del Producto" name="color" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Categoria:</label>
                    <input type="text" placeholder="Categoria del Producto" name="categoria" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Existencia:</label>
                    <input type="number" placeholder="Existencia del Producto" name="existencia" onChange={actualizarState} required/>
                </div>

                <div class="campo">
                    <label>Imagen:</label>
                    <input type="file" placeholder="Categoria del Producto" name="imagen" onChange={actualizarState} required/>
                </div>

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Cliente" disabled = {validarProducto()}/>
                </div>

            </form>
        </Fragment>
    )
}
export default NuevoProducto;