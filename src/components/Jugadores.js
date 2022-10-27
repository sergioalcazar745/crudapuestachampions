import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {

    state = {
        jugadores: [],
        status: false
    }

    loadJugadores = () => {
        var request = Global.url + "api/Jugadores/JugadoresEquipo/" + this.props.id;
        axios.get(request).then(response => {
            this.setState({
                jugadores: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadores();
    }

    render() {
        return (
            <div className='container my-5'>
                {
                    this.state.status &&
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jugadores.map((jugador, index) => {
                                    return (
                                    <tr key={index}>
                                        <td>{jugador.nombre}</td>
                                        <td><img src={jugador.imagen}/></td>
                                        <td><NavLink to={"/jugador/" + jugador.idJugador} className='btn btn-outline-primary'>Detalles</NavLink></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

