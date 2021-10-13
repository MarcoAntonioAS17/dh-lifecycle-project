import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';


function ContentRowTop(){
    const [productos, setProductos] = useState({});
    const [usuarios, setUsuarios] = useState({});

    useEffect(()=> {
        fetch('http://localhost:3003/api/products')
        .then(response => response.json())
        .then(data => {setProductos(data)});
        fetch('http://localhost:3003/api/users')
        .then(response => response.json())
        .then(data => setUsuarios(data));
    },[]);

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            <SmallCard color="success" titulo="Total de productos" valor={productos.count} icono="fas fa-award"/>
            <SmallCard color="primary" titulo="Total de usuarios" valor={usuarios.count} icono="fas fa-award"/>
            <SmallCard color="warning" titulo="Total de categorías" valor={3} icono="fas fa-award"/>
            <SmallCard color="primary" titulo="Total de sub-categorías" valor={5} icono="fas fa-award"/>
                
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;