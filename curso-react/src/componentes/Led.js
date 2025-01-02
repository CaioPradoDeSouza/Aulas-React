import React, { useState } from 'react';

import LedVerde from './imgss/led_verde.png'
import LedVermelho from './imgss/led_vermelho.png'

export default function Led(props) {

    return (
        <>
            <img style={{ width: '100px' }} src={props.ligado ? LedVerde : LedVermelho} />
            <button onClick={() => props.setLigado(!props.ligado)}>
                {props.ligado ? 'Desligar' : 'Ligar'}
            </button>
        </>

    );
}
