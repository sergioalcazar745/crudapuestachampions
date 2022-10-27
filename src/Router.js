import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home'
import Menu from './components/Menu';
import Apuestas from './components/Apuestas';
import Equipo from './components/Equipo';
import Jugadores from './components/Jugadores';
import Jugador from './components/Jugador';
import CreateApuesta from './components/CreateApuesta';

export default class Router extends Component {
    
    render() {

        function GetParamsEquipo(){
            const { id } = useParams();
            return (<Equipo id={id}/>)
        }

        function GetParamsJugadores(){
            const { id } = useParams();
            return (<Jugadores id={id}/>)
        }

        function GetParamsJugador(){
            const { id } = useParams();
            return (<Jugador id={id}/>)
        }

        return (
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/apuestas' element={<Apuestas/>}/>
                    <Route path='/equipo/:id' element={<GetParamsEquipo/>}/>
                    <Route exact path='/jugadores/:id' element={<GetParamsJugadores/>}/>
                    <Route exact path='/jugador/:id' element={<GetParamsJugador/>}/>
                    <Route exact path='/crear-apuesta' element={<CreateApuesta/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
