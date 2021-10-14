import React from 'react';

import UsuariosList from './UsuariosList';

class Movie extends React.Component {
	constructor() {
		super()
		this.state = {
			usuariosList: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3003/api/users')
		.then(response => response.json())
		.then(res => {
				this.setState({ usuariosList: res.users})
		})
	}

	render() {
		return(
			<React.Fragment>
					{/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">Listado de usuarios en Database</h1>
				
				{/*<!-- DataTales Example -->*/}
				<div className="card shadow mb-4">
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Email</th>
										<th>Detail</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Email</th>
										<th>Detail</th>
									</tr>
								</tfoot>
								<UsuariosList usuarios={this.state.usuariosList} />
							</table>
						</div>
					</div>
				</div>            
			</React.Fragment>
	)
	}
}

export default Movie;