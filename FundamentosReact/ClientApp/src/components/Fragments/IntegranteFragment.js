import React, { useState, useEffect } from 'react'


const IntegranteFragment = ({imagen, titulo, alt = "Imagen de perfil"}) => {

    return (
        <>
            <div class="card">
                <img src={imagen} class="card-img-top" alt={alt} />
                <div class="card-body">
                    <h3 class="card-title d-flex justify-content-center ">{titulo}</h3>
                </div>
            </div>
        </>
    )
}

export default IntegranteFragment