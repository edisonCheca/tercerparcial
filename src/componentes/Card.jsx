import React from 'react'
import Imagen from './Imagen'
import Titulo from './Titulo'
import  Parrafo  from './Parrafo'
import './Card.css'


const Card = () => {
    return (
        <>
        <div className="containerC">
            <Imagen />
            <Titulo />
            <Parrafo />
        </div>
        </>
    )
}

export default Card