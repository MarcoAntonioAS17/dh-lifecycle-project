import React, { useEffect, useState } from 'react';
import ContentRowMovies from './ContentRowMovies';
import ProductosCategoria from './ProductosEnCategoria';
import ProductosSubcategoria from './ProductosEnSubcategoria';
import Productos from './Productos';
import UltimoProducto from './UltimoProductoCreado';
import UltimoUsuario from './UltimoUsuarioCreado';
import Spinner from './Spiner';

function ContentRowTop(){
	const [fetchDonePro, setFetchDonePro] = useState(false);
	const [productos, setProductos] = useState({});

    useEffect(()=> {
        fetch('http://localhost:3003/api/products')
			.then(response => response.json())
			.then(data => {
				setProductos(data)
				setFetchDonePro(true);
			});
    },[]);

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">RAStyle Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					{fetchDonePro ? <ContentRowMovies totalProductos={productos.count}/> : <Spinner/>}
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Ultimo usuario creado-->*/}
						<UltimoUsuario/>

						{/*<!-- Ultimo producto creado -->*/}
						{fetchDonePro ? <UltimoProducto lastProduct={productos.lastProduct}/> : <Spinner/>}

						{/*<!-- Total de productos por categoria -->*/}
						{fetchDonePro ? <ProductosCategoria countByCategory={productos.countByCategory}/> : <Spinner/>}
						
						{/*<!-- Total de productos por sub-categoria -->*/}
						<ProductosSubcategoria />

					</div>
					{fetchDonePro ? <Productos productos={productos.products} />: <Spinner/>}	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;