import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';

function NuevoRol(){
    
    

    //s
    const [rol, guardarRoles] = useState({
        "action":"insert",
        "nombre":"",
    });

    const actualizarState = e =>{
        //console.log(e.target.value);
        guardarRoles({
            ...rol,
            [e.target.name]: e.target.value
        })
    }

    const AgregarRol = e =>{
        e.preventDefault();
        ClienteAxios.post('/rol', rol).then(res=>{alert("Rol Guardado");window.location.reload();console.log(res)});
    }

    const validarRol = ()=>{
        const{nombre} = rol;
        let valido = !nombre.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Nuevo Rol</h2>

            {/* <form action="/alumnos" method="POST"> */}
            {/* <form onSubmit={(AgregarAlumno)}> */}
            <form onSubmit={(AgregarRol)}>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>Nombre del Rol:</label>
                    <input type="text" placeholder="Rol" name="nombre" onChange={actualizarState} required/>
                </div>

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Rol" disabled = {validarRol()}/>
                </div>

            </form>
        </Fragment>
    )
}
export default NuevoRol;