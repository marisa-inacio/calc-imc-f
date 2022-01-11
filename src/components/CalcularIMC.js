import React from 'react';

export default function CalcularIMC(props) {
    const calc = () => {
        const r = props.p/(props.a*props.a)
        props.sr(r)
        console.log(r)
    }
     

    return(
        <div className="inputs">
            <button className="btn btn-primary" style={{textAlign: 'left'}} onClick={calc}>Calcular</button>
        </div>
    )
}