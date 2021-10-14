import React, { useEffect, useState } from 'react';

function ProductosSubcategoria() {
    const [subcategory, setSubcategory] = useState([]);
    const [cardBodyClass, setCardBodyClass] = useState("card-body");

    useEffect( ()=> {
        fetch(`https://rastyle-equipo11.herokuapp.com/api/subcategory`)
			.then(response => response.json())
			.then(data => {
                setSubcategory([
                    {"name": "Tops", "data": data.tops},
                    {"name": "Sudaderas", "data": data.sudaderas},
                    {"name": "Zapatos", "data": data.zapatos},
                    {"name": "Jeans", "data": data.jeans},
                    {"name": "Vestidos", "data": data.vestidos}
                ])
            });
    },[]);

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
                            Total de productos por sub-categoría
                        </h6>
                    </div>
                    <div className={cardBodyClass}>
                        <div className="row">
                            {
                                subcategory.map((subcate, index) => {
                                    return (
                                    <div className="col-lg-6 mb-4" id={index}>
                                        <div className="card text-white bg-dark  shadow">
                                            <div className="card-body">
                                                {subcate.name}: {subcate.data} Productos 
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
    
}

export default ProductosSubcategoria;