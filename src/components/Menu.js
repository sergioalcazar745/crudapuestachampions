import React, { Component } from 'react';
import logo from './../assests/images/logo.png';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {

    state = {
        equipos: [],
        status: false
    }

    loadEquipos = () => {
        var request = Global.url + "api/Equipos";
        axios.get(request).then(response => {
            this.setState({
                equipos: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipos();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <NavLink to={"/"} className='navbar-brand'><img src={logo} width={"50px"} height={"50px"} alt="logo"/>  Champions</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/apuestas"} className='nav-link'>Apuestas</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.status &&
                                        this.state.equipos.map((equipo, index) => {
                                            return (<li key={index}><NavLink to={"/equipo/" + equipo.idEquipo} className='dropdown-item'>{equipo.nombre}</NavLink></li>)
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
