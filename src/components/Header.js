import React from 'react' ;
import Contest from './Contest' ;
import Notices from './Notices' ;

const Header = ( { sections } ) => {
    
    return (
        <div className="header-container">
            <div className="aside-container">
                <h3 style={ { textAlign: 'center' } }>CONCURSOS</h3>
                {
                    sections.map( sectionContest => {
                        if ( sectionContest.id <= 3 ){
                            return (
                                <Contest
                                    key={ sectionContest.id } 
                                    section={ sectionContest }
                                >
                                    { <button className="button">Participar</button> }
                                </Contest>
                            ) ;
                        }
                    } )
                }
                
            </div>
            <Notices 
                sections={ sections }
                title="LO RECOMENDADO PARA VOS"
                count={ 2 }
                isHeader={ true }
            />
            
        </div>
    ) ;
} ;

export default Header ;
