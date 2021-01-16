import React from 'react' ;
import Card from './Card' ;

const Notices = ( { sections, title, count, isHeader } ) => {
    return (
        <div className="section-container" style={ { width: isHeader ? '65%' : '95%' } }>
            <h3>{ title }</h3>
            <div className="section">
                {
                    sections.map( sectionCard => {
                        if ( sectionCard.id <= count ){
                            return (
                                <Card 
                                    key={ sectionCard.id }
                                    section={ sectionCard }
                                />
                            ) ; 
                        }
                    } )
                }
            </div>
        </div>
    ) ;
} ;

export default Notices ;
