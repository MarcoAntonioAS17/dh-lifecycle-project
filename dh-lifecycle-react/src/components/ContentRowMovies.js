import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Movies in Data Base",
    valor: 21,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    const [productos, setProductos] = useState({});

    useEffect(()=> {
        fetch('http://localhost:3003/api/products')
        .then(response => response.json())
        .then(data => setProductos(data));
    },[]);

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            <SmallCard color="success" titulo="Total productos" valor={productos.count} icono="fas fa-award"/>
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;