import React, { useEffect, useState } from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import Spinner from './Spiner';

function UltimoProducto(props){
	
	const [ultimoProducto] = useState(props.lastProduct);
	const [fotosDelProducto, setFotosDelProducto] = useState([]);
	const [fetchDone, setFetchDone] = useState(false);
	const [datos, setDatos] = useState([]);

	useEffect( () => {
		fetch(`http://localhost:3003/api/products/${ultimoProducto}`)
			.then(response => response.json())
			.then(data => {

				setDatos ([
					{"name": "ID", "data": data.id},
					{"name": "Nombre", "data": data.Nombre},
					{"name": "Cantidad", "data": data.Cantidad},
					{"name": "Precio", "data": `$${data.precio}`},
					{"name": "enOferta", "data": data.enOferta === 1 ? "Si" : "No"},
					{"name": "precioOferta", "data": `$${data.precioOferta}`},
					{"name": "hotsale", "data": data.hotsale === 1 ? "Si" : "No"},
					{"name": "Descripcion", "data":data.Descripcion},
					{"name": "Creado en", "data": data.createdAt},
					{"name": "Actualizado en", "data": data.updatedAt},
					{"name": "Tallas", "data": data.tallas},
					{"name": "Colores", "data": data.colores }
				
				]);
				setFotosDelProducto(data.fotosDelProducto)
				setFetchDone(true);
			});
	},[ultimoProducto]);

    return(
        <React.Fragment>
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
					</div>
					{ fetchDone ?
						<div className="card-body"> 
							<div className="text-center">
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} 
								src={fotosDelProducto.length>0 ? fotosDelProducto[0].path : imagenFondo} 
								alt="Último Producto creado "/>
							</div>
							{datos.map( (item, index) => {
								return (
								<div style={{display: 'flex', margin: 0}}>
									<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}> {item.name}: </h5>
									<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}> {item.data} </p><br/>
								</div>)
							})}
							
						</div>
					: <Spinner/>}
				</div>
			</div>
        </React.Fragment>
    )

}
export default UltimoProducto;