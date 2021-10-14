import React, { useState } from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de usuarios",
    valor: 21,
    icono: "fas fa-user",
}

let amount ={
    color:   "success",
    titulo: "Total de categorías",
    valor: 79,
    icono: "fas fa-tag",
}

let user = {
    color:   "warning",
    titulo: "Total de sub-categorías",
    valor: 49,
    icono: "fas fa-tags",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(props){
    const [totalProductos] = useState(props.totalProductos);

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }
            <SmallCard color="success" titulo="Total productos" valor={totalProductos} icono="fas fa-box-open"/>
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;