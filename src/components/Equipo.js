import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Equipo extends Component {

    state = {
        equipo: {},
        status: false
    }

    loadEquipo = () => {
        var request = Global.url + "api/Equipos/" + this.props.id;
        axios.get(request).then(response => {
            this.setState({
                equipo: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipo();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.id != this.props.id){
            this.loadEquipo();
        }
    }

    render() {
        return (
            <div className='container my-5'>
                <div className="card text-center">
                    <div className="card-header">
                        {this.state.equipo.nombre}
                    </div>
                    <div className="card-body">
                        <img src={this.state.equipo.imagen} />
                        <h5 className="card-title my-3">Champions: {this.state.equipo.champions}</h5>
                        <p className="card-text">{this.state.equipo.descripcion}</p>
                        <NavLink to={"/jugadores/" + this.state.equipo.idEquipo} className='btn btn-success me-3'>Jugadores</NavLink>
                        <NavLink to={"/"} className='btn btn-danger'>Volver</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
