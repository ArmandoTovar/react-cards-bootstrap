import React from 'react'
import Card from './Card'
import image1 from '../assets/photo1.png'
import image2 from '../assets/photo2.png'
import image3 from '../assets/photo3.png'
import image4 from '../assets/photo4.png'
import image5 from '../assets/photo5.png'
import image6 from '../assets/photo6.png'

const cards = [{
    id: 1,
    title: 'Bill Mahoney',
    image: image1,
    prof:'product Owner'
},
    {
        id: 2,
        title: 'Saba Cabrera',
        image: image2,
        prof: 'Art Director'
    },
    {
        id: 3,
        title: 'Shae Le',
        image: image3,
        prof: 'Tech Lead'
    },
    {
        id: 4,
        title: 'Skylah Lu',
        image: image4,
        prof: 'Ux Designer'
    },
    {
        id: 5,
        title: 'Griff Richards',
        image: image5,
        prof: 'Developer'
    },
    {
        id: 6,
        title: 'Stan John',
        image: image6,
        prof: 'Developer'
    }]
    

function Cards() {
    return (
    

        <div className="Foto">
         
                {cards.map(card => (
                  
                        <Card
                        title={card.title}
                        imagenes={card.image}
                        text={card.prof}
                        id={card.id}
                        />
                     
                  

                ))}
                

            </div>
          
    
    )
}
export default Cards