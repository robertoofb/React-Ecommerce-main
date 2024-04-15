import React, { Fragment,useEffect,useState } from "react";
import ClienteAxios from "../../config/axios";
import { useParams } from "react-router-dom";

function EditarDetalleProducto()
{
    let params = useParams();
    console.log(params.id);
 
   const [detalle_producto, guardareditarDetalle_producto] = useState({
        action :'update',
        producto: '', 
        cantidad: '', 
        precio: '', 
        total: '', 
        id:''+params.id+''    
    });

    const ConsultarAPI = async () => {
        const Detalle_productoConsulta    = await ClienteAxios.get('/detalle_productos/'+params.id+'');
        //COLOCAR STATE
        guardareditarDetalle_producto(Detalle_productoConsulta.data[0]);   
    }
    useEffect( () => {
        ConsultarAPI();
    },[]);

    /**codigo para validar formulario */

   
    const actualizarState = e =>{
        
        guardareditarDetalle_producto({
        ...detalle_producto,
        [e.target.name] : e.target.value
        
       })

    }

    const validarDetalle_producto = () => {
        const {producto, cantidad, precio, total} = detalle_producto;
        let valido = !producto.length || !cantidad.length || !precio.length || !total.length;
        return valido;
    }


    /*enviar post**/

    const ModificarDetalle_producto = e => {
        e.preventDefault();
        ClienteAxios.post('/detalle_producto', detalle_producto)
        .then(res =>{
            console.log(res);
            alert("Detalle del Producto Moodificado");
            window.location.reload();        
		});
    }


    return(

        <Fragment>
            <h2>Editar Detalle del Producto</h2>

                <form onSubmit={ModificarDetalle_producto}>
                    <legend>Llena todos los campos</legend>


                    <div class="campo">
                        <label>ID del Producto:</label>
                        <input type="number" placeholder="ID del Producto" 
                        name="producto" 
                        onChange={actualizarState}
                        value={detalle_producto.producto}
                        />
                    </div>

                    <div class="campo">
                        <label>Cantidad:</label>
                        <input type="number" placeholder="Cantidad del Producto" 
                        name="cantidad" 
                        onChange={actualizarState}
                        value={detalle_producto.cantidad}
                        />
                    </div>

                    <div class="campo">
                        <label>Precio:</label>
                        <input type="number" placeholder="Precio del Producto" 
                        name="precio" 
                        onChange={actualizarState}
                        value={detalle_producto.precio}
                        />
                    </div>

                    <div class="campo">
                        <label>Total:</label>
                        <input type="number" placeholder="Precio total del Producto" 
                        name="total" 
                        onChange={actualizarState}
                        value={detalle_producto.total}
                        />
                    </div>


                    <div class="enviar">
                            <input type="submit" class="btn btn-azul" value="Actualizar Detalle del Producto"/>
                    </div>

                </form>

        </Fragment>
        
    )
}

export default EditarDetalleProducto;

