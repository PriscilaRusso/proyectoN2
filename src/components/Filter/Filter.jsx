import React, { useState } from 'react'; 
import styles from  "./Filter.module.css";
import hotelsData from '../../data';

export default function Filter (props) {

const estadosIniciales = {
    prices: "Todos los precios.",
    countries: "Todos los paises.",
    sizes: "Cualquier Tamaño",
    entryDate: "",
    departureDate: ""
};

let optionsPrices = [estadosIniciales.prices,'$', '$$', '$$$', '$$$$']
let optionsCountries = [estadosIniciales.countries,'Argentina', 'Brasil', 'Chile', 'Uruguay']
let optionsSizes = [ estadosIniciales.sizes, 'Pequeño', 'Mediano', 'Grande']

return (
    <form action="" className={styles.filterMenu}>
        <input className={styles.filter} type="date" value={props.filtros.entryDate} onChange={(event) => props.filterSet(event, "entryDate")}/>
        <input className={styles.filter} type="date" value={props.filtros.departureDate} onChange={(event) => props.filterSet(event, "departureDate")} />

        <select className={styles.filter} value={props.filtros.prices} onChange={(event) => props.filterSet(event, "prices")}>
            {optionsPrices.map((prices)=> {
                return <option value={prices}>{prices}</option>
            })}
        </select>
        <select className={styles.filter} value={props.filtros.countries} onChange= {(event) => props.filterSet(event, "countries")}>
            {optionsCountries.map((countries)=>{
                return <option value={countries}>{countries} </option>
            })}
        </select>
        <select className={styles.filter} value={props.filtros.sizes} onChange={(event) => props.filterSet(event, "sizes")}>
            {optionsSizes.map((sizes)=>{
                return <option value={sizes}>{sizes}</option>
            })}
        </select>
        <button className={styles.button}>LIMPIAR</button>
    </form>
)
}
