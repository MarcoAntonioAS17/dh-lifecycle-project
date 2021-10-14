import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';


function ContentRowTop(props){
    const [usuarios, setUsuarios] = useState({});
    const [totalProductos] = useState(props.totalProductos);

    useEffect(()=> {

        fetch('https://rastyle-equipo11.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => setUsuarios(data));
    },[]);

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            <SmallCard color="success" titulo="Total de productos" valor={totalProductos} icono="fas fa-box-open"/>
            <SmallCard color="primary" titulo="Total de usuarios" valor={usuarios.count} icono="fas fa-user"/>
            <SmallCard color="warning" titulo="Total de categorías" valor={3} icono="fas fa-tag"/>
            <SmallCard color="primary" titulo="Total de sub-categorías" valor={5} icono="fas fa-box-tags"/>
                
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;