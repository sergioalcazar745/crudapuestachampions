import axios from 'axios';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Global from '../Global';

export default class CreateApuesta extends Component {

    state = {
        status: false
    }

    usuario = React.createRef();
    resultado = React.createRef();
    fecha = React.createRef();

    enviarApuesta = (e) => {
        e.preventDefault();

        var request = Global.url + "api/Apuestas";

        var apuesta = {
            idApuesta: 0,
            usuario: this.usuario.current.value,
            resultado: this.resultado.current.value,
            fecha: this.fecha.current.value
        }
        axios.post(request, apuesta).then(response => {
            this.setState({
                status: true
            })
        })
    }

    render() {

        if(this.state.status){
            return <Navigate to={"/apuestas"}/>
        }

        return (
            <div className='container'>
                <h1 className='my-5'>Realizar Apuesta</h1>
                <form onSubmit={this.enviarApuesta}>
                    <div className='mt-3'>
                        <label className='form-label'>Usuario: </label>
                        <input type="text" className='form-control' ref={this.usuario}/>
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>Resultado: </label>
                        <input type="text" className='form-control' ref={this.resultado}/>
                    </div>
                    <div className='mt-3'>
                        <label className='form-label'>Fecha: </label>
                        <input type="text" className='form-control' ref={this.fecha}/>
                    </div>
                    <button className='btn btn-primary mt-3'>Enviar</button>
                </form>
            </div>
        )
    }
}
