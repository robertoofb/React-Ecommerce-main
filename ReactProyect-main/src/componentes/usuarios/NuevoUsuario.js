import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';

function NuevoUsuario(){
    
    

    //s
    const [usuario, guardarUsuarios] = useState({
        "action":"insert",
        "nombre":"",
        "apellido":"",
        "correo":"",
        "contraseña":"",
        "rol":"",

    });

    const actualizarState = e =>{
        //console.log(e.target.value);
        guardarUsuarios({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const AgregarUsuario = e =>{
        e.preventDefault();
        ClienteAxios.post('/usuario', usuario).then(res=>{alert("Usuario Guardado");window.location.reload();console.log(res)});
    }

    const validarUsuario = ()=>{
        const{nombre,apellido,correo,contraseña,rol} = usuario;
        let valido = !nombre.length || !apellido.length || !correo.length || !contraseña.length || !rol.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Nuevo Usuario</h2>

            {/* <form action="/alumnos" method="POST"> */}
            {/* <form onSubmit={(AgregarAlumno)}> */}
            <form onSubmit={(AgregarUsuario)}>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre del Usuario" name="nombre" onChange={actualizarState} required/>
                </div>
                <div class="campo">
                    <label>Apellido:</label>
                    <input type="text" placeholder="Apellido del Usuario" name="apellido" onChange={actualizarState} required/>
                </div>
                <div class="campo">
                    <label>Correo:</label>
                    <input type="email" placeholder="Correo del Usuario" name="correo" onChange={actualizarState} required/>
                </div>
                <div class="campo">
                    <label>Contraseña:</label>
                    <input type="text" placeholder="Contraseña del Usuario" name="contraseña" onChange={actualizarState} required/>
                </div>
                <div class="campo">
                    <label>ID del Rol:</label>
                    <input type="text" placeholder="Rol del Usuario" name="rol" onChange={actualizarState} required/>
                </div>

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Usuario" disabled = {validarUsuario()}/>
                </div>

            </form>
        </Fragment>
    )
}
export default NuevoUsuario;