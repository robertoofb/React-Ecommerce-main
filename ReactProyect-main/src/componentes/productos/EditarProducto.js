import React, { Fragment,useEffect,useState } from "react";
import ClienteAxios from "../../config/axios";
import { useParams } from "react-router-dom";

function EditarProducto()
{
    let params = useParams();
    console.log(params.id);
 
   const [producto, guardareditarProducto] = useState({
        action :'update',
        nombre: '',
        descripcion: '', 
        precio: '', 
        talla: '', 
        color: '', 
        categoria: '', 
        existencia: '', 
        imagen: '', 
        id:''+params.id+''    
    });

    const ConsultarAPI = async () => {
        const ProductoConsulta    = await ClienteAxios.get('/productos/'+params.id+'');
        //COLOCAR STATE
        guardareditarProducto(ProductoConsulta.data[0]);   
    }
    useEffect( () => {
        ConsultarAPI();
    },[]);

    /**codigo para validar formulario */

   
    const actualizarState = e =>{
        
        guardareditarProducto({
        ...producto,
        [e.target.name] : e.target.value
        
       })

    }

    const validarProducto = () => {
        const {nombre, descripcion, precio, talla, color, categoria, existencia, imagen} = producto;
        let valido = !nombre.length || !descripcion.length || !precio.length || !talla.length || !color.length || !categoria.length || !existencia.length || !imagen.length ;
        return valido;
    }


    /*enviar post**/

    const ModificarProducto = e => {
        e.preventDefault();
        ClienteAxios.post('/producto', producto)
        .then(res =>{
            console.log(res);
            alert("Producto Moodificado");
            window.location.reload();        
		});
    }


    return(

        <Fragment>
            <h2>Editar Producto</h2>

                <form onSubmit={ModificarProducto}>
                    <legend>Llena todos los campos</legend>


                    <div class="campo">
                        <label>Nombre:</label>
                        <input type="text" placeholder="Nombre del Producto" 
                        name="nombre"
                        onChange={actualizarState}
                        value={producto.nombre}
                        />
                    </div>

                    <div class="campo">
                        <label>Descripcion:</label>
                        <input type="text" placeholder="Descripcion del Producto" 
                        name="descripcion"
                        onChange={actualizarState}
                        value={producto.descripcion}
                        />
                    </div>
                    
                    <div class="campo">
                        <label>Precio:</label>
                        <input type="number" placeholder="Precio del Producto" 
                        name="precio"
                        onChange={actualizarState}
                        value={producto.precio}
                        />
                    </div>
                    
                    <div class="campo">
                        <label>Talla:</label>
                        <input type="text" placeholder="Talla del Producto" 
                        name="talla"
                        onChange={actualizarState}
                        value={producto.talla}
                        />
                    </div>
                    
                    <div class="campo">
                        <label>Color:</label>
                        <input type="text" placeholder="Color del Producto" 
                        name="color"
                        onChange={actualizarState}
                        value={producto.color}
                        />
                    </div>

                    <div class="campo">
                        <label>Categoria:</label>
                        <input type="text" placeholder="Categoria del Producto" 
                        name="categoria"
                        onChange={actualizarState}
                        value={producto.categoria}
                        />
                    </div>

                    <div class="campo">
                        <label>Existencia:</label>
                        <input type="number" placeholder="Existencia del Producto" 
                        name="existencia"
                        onChange={actualizarState}
                        value={producto.existencia}
                        />
                    </div>

                    <div class="campo">
                        <label>Imagen:</label>
                        <input type="file" placeholder="Imagen del Producto" 
                        name="imagen"
                        onChange={actualizarState}
                        />
                    </div>

                    

                    <div class="enviar">
                            <input type="submit" class="btn btn-azul" value="Actualizar Producto"/>
                    </div>

                </form>

        </Fragment>
        
    )
}

export default EditarProducto;

