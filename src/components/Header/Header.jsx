import React from 'react'; 
import  styles from "./Header.module.css"


function Header (props) {
    return (
            <div className= {styles.header} >
                <h1>Hoteles</h1>
                <p>En cualquier fecha.</p>
                <p>En cualquir país.</p>
                <p>De cualquier precio.</p>
                <p>De cualquier tamaño</p>
            </div>
    );
}

export default Header