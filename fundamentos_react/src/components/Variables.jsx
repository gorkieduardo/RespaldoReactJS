import React from 'react'

const Variables = () => {

    const saludo = 'Hola desde constante'
    const imagen = 'https://ssl.quiksilver.com/static/QS/default/category-assets/marketing-landing/landing/build/img/surf/tiles/surf_featured_1.jpg'

    return (
        <div>
            <h2>Nuevo componente { saludo }</h2>
            <img src={imagen} alt=""/>
        </div>
    )
}

export default Variables
