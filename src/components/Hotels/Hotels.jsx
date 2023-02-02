import React from "react";
import Cards from "../Cards/Cards";
import styles from "./Hotels.module.css";

function Hotels(props) {
  return (
    <div className={styles.hotels}>
      {props.hotels.map((hotel) => {
        return <Cards {...hotel} key={hotel.slug} />;
      })}
    </div>
  );
}

export default Hotels;
