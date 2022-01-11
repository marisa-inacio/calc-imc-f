import React from 'react';
import "./estilo.css";

export default function Altura(props) {
    return(
        <div className="inputs">
            <label>
                Altura
                <input type="text" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}></input>
            </label>
        </div>
    )
}