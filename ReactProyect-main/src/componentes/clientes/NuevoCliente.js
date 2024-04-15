import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';

function NuevoCliente(){
    
    

    //s
    const [cliente, guardarClientes] = useState({
        "action":"insert",
        "usuario":"",
        "direccion":"",
        "celular":""
    });

    const actualizarState = e =>{
        //console.log(e.target.value);
        guardarClientes({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const AgregarCliente = e =>{
        e.preventDefault();
        ClienteAxios.post('/cliente', cliente).then(res=>{alert("Cliente Guardado");window.location.reload();console.log(res)});
    }

    const validarCliente = ()=>{
        const{usuario,direccion,celular} = cliente;
        let valido = !usuario.length || !direccion.length || !celular.length;
        return valido;
    }

    return (
        <Fragment>
        <h2>Nuevo Cliente</h2>

            {/* <form action="/alumnos" method="POST"> */}
            {/* <form onSubmit={(AgregarAlumno)}> */}
            <form onSubmit={(AgregarCliente)}>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>ID de Cliete:</label>
                    <input type="number" placeholder="ID cliente" name="usuario" onChange={actualizarState}/>
                </div>
            
                <div class="campo">
                    <label>Direccion:</label>
                    <input type="text" placeholder="Direccion Cliente" name="direccion" onChange={actualizarState}/>
                </div>

                <div class="campo">
                    <label>Celular:</label>
                    <input type="text" placeholder="Celular Cliente" name="celular" onChange={actualizarState}/>
                </div>

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Cliente" disabled = {validarCliente()}/>
                </div>

            </form>
        </Fragment>
    )
}
export default NuevoCliente;