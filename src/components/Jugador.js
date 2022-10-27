import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Jugador extends Component {

    state = {
        jugador: {},
        status: false
    }

    loadJugador = () => {
        var request = Global.url + "api/Jugadores/" + this.props.id;
        axios.get(request).then(response => {
            this.setState({
                jugador: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadJugador();
    }

    render() {
        return (
            <div className='container my-5'>
                {
                    this.state.status &&
                    <div className="card text-center">
                        <div className="card-header">
                            {this.state.jugador.nombre}
                        </div>
                        <div className="card-body">
                            <img src={this.state.jugador.imagen} />
                            <h5 className="card-title my-3">Posicion: {this.state.jugador.posicion}</h5>
                            <p className="card-text">Fecha de nacimiento: {this.state.jugador.fechaNacimiento}<br/>
                            País: {this.state.jugador.pais}</p>
                            <NavLink to={"/jugadores/" + this.state.jugador.idEquipo} className='btn btn-success me-3'>Jugadores</NavLink>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

