import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class Apuestas extends Component {

    state = {
        apuestas: [],
        status: false
    }

    loadApuestas = () => {
        var request = Global.url + "api/Apuestas";
        axios.get(request).then(response => {
            this.setState({
                apuestas: response.data,
                status: true
            })
        });
    }

    componentDidMount = () => {
        this.loadApuestas();
    }

    render() {
        return (
            <div className='container'>
                <h1 className='my-5'>Apuestas</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Usuario</th>
                            <th scope="col">Resultado</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apuestas.map((apuesta, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{apuesta.usuario}</td>
                                        <td>{apuesta.resultado}</td>
                                        <td>{apuesta.fecha}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='text-center mt-5'>
                    <NavLink to="/crear-apuesta" className="btn btn-success">Realizar Apuesta</NavLink>
                </div>
                
            </div>
        )
    }
}
