import React from 'react' ;

const Star = ( { star } ) => {
    return (
        <div className="card-container">
            <p className="title-star"><small>{ star.name }</small></p>
            <div className="card-aside card-star">
                <img className="img-star" src={ star.img }/>
                <div>
                    <p><small>classical Latin random text. It has roots in a piece of classical Latin random text. It has roots in a piece of classical Latin random</small></p>
                </div>
            </div>
        </div>
    ) ;
} ;

export default Star ;
