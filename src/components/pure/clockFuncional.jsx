import React, { useState, useEffect } from 'react';

export const Clock = () => {

    const fechaInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellido: 'San José'
    }

    const [data, setData] = useState(fechaInicial);

    useEffect(() => {
        //componentDidMount
        const timerID = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            //component willummount
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setData({
            ...data,
            fecha: new Date(),
            edad: data.edad++
        })
    };

    return(
        <div>
            <h2>
                Hora Actual:
                { data.fecha.toLocaleTimeString() }
            </h2>
            <h3>{ data.nombre } { data.apellido }</h3>
            <h1>Edad: { data.edad }</h1>
        </div>
    );
};