import React, { Component } from 'react';
import portada from './../assests/images/portada.webp'

export default class Home extends Component {
    render() {
        return (
            <div>
                <img src={portada} width={"75%"} style={{margin: "auto", display: "block"}}/>
            </div>
        )
    }
}
