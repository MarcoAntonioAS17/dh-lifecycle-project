import React, { useState } from 'react';
import Genre  from './Genre';

function ProductosSubcategoria() {
    const [genresList, setGenresList] = useState([]);
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
                            Total de productos por sub-categoría
                        </h6>
                    </div>
                    <div className={cardBodyClass}>
                        <div className="row">
                            {
                                genresList.map((genre)=>{
                                    return  <Genre  {...genre}  key={genre.id} />
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