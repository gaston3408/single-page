import React from 'react' ;

const Contest = ( { section, children } ) => (
    <>
        <div className="card-aside">
            <img className="img-card" src={ section.img } />
            <div>
                <p><small>random text. It has roots in a piece of classical Latin</small></p>
                <div className="button-container">
                    { children }
                </div>
            </div>
        </div>    
    </>
) ;

export default Contest ;
