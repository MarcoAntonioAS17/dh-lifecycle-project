import React, { useState } from 'react';

import ProductosList from './ProductosList.';

function Productos ({productos}) {
	
	return(
		<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 text-gray-800">Listado de productos</h1>
			
			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Detalles</th>
									<th>Información</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Detalles</th>
									<th>Información</th>
								</tr>
							</tfoot>
							<ProductosList productos={productos}/>
						</table>
					</div>
				</div>
			</div>            
		</React.Fragment>
	)
	
}

export default Productos;