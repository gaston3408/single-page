import React from 'react' ;

const Card = ( { section } ) => {
    return (
        <>
            <div className="section-card">
                <img src={ section.img } />
                <p style={ { fontSize: '80%' } }>{ section.description }</p>
            </div> 
        </>
    ) ;
} ;

export default Card ;
