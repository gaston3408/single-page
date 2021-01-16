import React from 'react' ;
import Header from './components/Header' ;
import Notices from './components/Notices' ;
import Star from './components/Star' ;

function App () {

    const sections = [
        {
            id: 1,
            img: './images/messi.jpg',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            id: 2,
            img: './images/messi.jpg',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            id: 3,
            img: './images/messi.jpg',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
            id: 4,
            img: './images/messi.jpg',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },

    ] ;

    const stars = [
        {
            id:1,
            name: 'Sylvester Stallone',
            img: './images/Sylvester-Stallone.jpg'
        },
        {
            id:2,
            name: 'Shakira',
            img:'./images/shakira.jpeg'
        },
        {
            id:3,
            name: 'Gastón',
            img: './images/pp.jpeg'
        },
    ] ;

    const images = [ 'rock.jpeg', 'pop.png', 'latina.jpg',  'musica.jpg', 'dasda.jpeg' ] ;
    


    return (
        <>
            <Header sections={ sections } />
            <h3 style={ { textAlign: 'center' } } >NUESTRAS FIGURAS</h3>
            <div className="famous-container">
                {
                    stars.map( star => (

                        <Star 
                            key={ star.id }
                            star={ star }
                        />
                    ) )
                }  

            </div>
            <h3 style={ { textAlign: 'center' } } >¿ QUE QUERES ESCUCHAR ?</h3>
            <div className="img-container">
                {
                    images.map( image => (
                        
                        <img key={ image } className="img-music" src={ `./images/${image}` }/>
                    ) )
                }
            </div>
            <Notices 
                sections={ sections }
                title="ÚLTIMAS NOTICIAS DE ESPECTÁCULOS"
                count={ 4 }
            />
            
        </>
    ) ;
}

export default App ;
