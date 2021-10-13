import React from 'react';
//import GenresInDb from './GenresInDb';

function ContentRowTopUser(usuario){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último usuario creado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={usuario.image} alt="Último Usuario creado "/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>ID: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.id}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>Nombre: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.firstName}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>Apellido: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.lastName}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>Email: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.email}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>Ciudad: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.ciudad}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>Estado: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.estado}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>País: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.pais}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>Teléfono: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.tel}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>Fecha de creación: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.createdAt}</p><br/>
									</div>
									<div style={{display: 'flex', margin: 0, paddingBottom: 15}}>
										<h5 style={{fontSize: '16px', fontWeight: 'bold', margin: 0}}>Fecha de actualización: </h5>
										<p style={{paddingLeft: '10px', fontSize: '16px', margin: 0}}>{usuario.updatedAt}</p><br/>
									</div>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						{/*<GenresInDb />*/}

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTopUser;