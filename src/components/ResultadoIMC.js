import React from 'react';
import "./estilo.css";

export default function Resultado(props) {
    return(
        <div className="inputs">
            {/* duas casas decimais no resultado */}
            <p style={{fontWeight: "bold"}}>Resultado: {props.r.toFixed(2)}</p>
        </div>
    )
}