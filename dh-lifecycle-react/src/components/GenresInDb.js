import React from 'react';
import Genre  from './Genre';


class GenresInDb extends React.Component {

    constructor() {
        super()
        this.state = {
            genresList: [],
            cardBodyClass: "card-body"
        }
    this.cardBody = React.createRef()
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/genres')
        .then(response => response.json())
        .then(res => {
            this.setState({ genresList: res.data})
        })
    }

    handleMouseOver() {
        // manipular el fondo del card con los generos
        let className  = this.state.cardBodyClass
        if(className.indexOf("bg-secondary") >= 0) className = "card-body";
        else className += " bg-secondary";
        this.setState({ cardBodyClass: className })
    }

    render() {
        return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={(e) => { this.handleMouseOver() }}>Genres in Data Base</h6>
                        </div>
                        <div className={this.state.cardBodyClass}>
                            <div className="row">
                                {
                                    this.state.genresList.map((genre)=>{
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
}

export default GenresInDb;