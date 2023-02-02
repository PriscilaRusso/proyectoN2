import React from 'react'; 
import  styles from "./Cards.module.css";


function dateHotels (fecha) {
    let fechaActual = new Date (fecha);

    const diaNum = fechaActual.getDate()
    const diaSemana = fechaActual.getDay()    
    const año = fechaActual.getFullYear()
    const mes = fechaActual.getMonth()
    return ` ${dias[diaSemana]}, ${diaNum} de ${meses[mes]} de ${año}`
}

let dias = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves", 
    "viernes",
    "sabado"
]

let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]


function Cards (props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>

                <img className={styles.img} src= {props.photo} alt="" />
                <h1>{props.name}</h1>
                <div >
                    <p className={styles.availability}>Desde el{dateHotels(props.availabilityFrom)}</p>
                </div>
                <div>
                    <p className={styles.availability}>Hasta el{dateHotels(props.availabilityTo)}</p>
                </div>
                <p className={styles.description}>{props.description}</p>

                    
                <div className={styles.city}>
                    <div>
                        <i></i>
                    </div>
                    <span>
                        {props.country}
                    </span>
                </div>


                <div className={styles.containerElements}>
                    <div className={styles.rooms}>
                        <div>
                            <i></i>
                        </div>
                    <span>{props.rooms} Habitaciones</span> 
                    </div>

                    <div className={styles.prices}>
                        {props.price}
                    </div>
                </div>
                <button className={styles.btnReserve}>Reservar</button>
            </div>
        </div>
    )
}

export default Cards