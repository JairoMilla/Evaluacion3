import React, { Component } from 'react';
import IntegranteFragment from './Fragments/IntegranteFragment'
import ImagenPerfil from '../assets/images/Perfil.jpg'
export class Home extends Component {
    static displayName = Home.name;



    render() {
        return (

            <div className="row">
                <div className="col-5 flex-shrink-0">
                    <IntegranteFragment
                        imagen={ImagenPerfil}
                        titulo="Imagen de perfil"
                    />

                </div>
                <div className="container col-5">
                    <h1>
                        Jairo Paolo Milla Tapia
                    </h1>
                    <p className="lead">
                        Fecha de nacimiento: 07 de noviembre del 2000
                        <br />
                        Estudiante de Analista programador
                        <br />
                        Actualmente vendedor en Lapiz Lopez, Mall plaza Calama

                    </p>
                </div>
                <div className="container mt-4">
                    <h1>
                        Habilidades
                    </h1>
                    <p className="lead">
                        Listado de habilidades
                    </p>
                    <ul class="list-group">
                        <li class="list-group-item">Uso de programas de Office</li>
                        <li class="list-group-item">Arme y desarme de computadoras</li>
                        <li class="list-group-item">Tocar el ukelele</li>
                        <li class="list-group-item">Hacer mantenimiento de computadoras</li>
                    </ul>

                </div>




            </div>

        );
    }
}
