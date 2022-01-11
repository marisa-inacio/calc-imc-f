import React from 'react';
import "./estilo.css";


export default function Peso(props) {
    return(
        <div >
            <h1 className="text-primary text-left">Calculadora de IMC</h1>
            <label className="inputs">
                Peso
                <input type="text" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}></input>
            </label>
        </div>
    )
}