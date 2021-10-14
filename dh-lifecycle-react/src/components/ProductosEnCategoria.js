import React, { useState } from 'react';

function ProductosCategoria(props) {
    const [Categories] = useState([
        { name: "Hombres", total: props.countByCategory.hombre},
        { name: "Mujeres", total: props.countByCategory.mujer},
        { name: "Unisex", total: props.countByCategory.unisex}
    ]);
    const [cardBodyClass, setCardBodyClass] = useState("card-body");

    const handleMouseOver = (e) => {
        // manipular el fondo del card con los generos
        let className  = cardBodyClass
        if(className.indexOf("bg-secondary") >= 0) className = "card-body";
        else className += " bg-secondary";
        setCardBodyClass(className);
    }
    
    return (
    <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={ event => handleMouseOver() }>
                            Total de productos por categoría
                        </h6>
                    </div>
                    <div className={cardBodyClass}>
                        <div className="row">
                            {Categories.map((category, index) => {
                                return (
                                <div className="col-lg-6 mb-4" id={index}>
                                    <div className="card text-white bg-dark  shadow">
                                        <div className="card-body">
                                            {category.name}: {category.total} Productos 
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}

export default ProductosCategoria;