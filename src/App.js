import React, { useState } from "react";
//Componentes
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import hotelsData from "./data";
import Hotels from "./components/Hotels/Hotels";

function App() {

  const estadosIniciales = {
    prices: "Todos los precios.",
    countries: "Todos los paises.",
    sizes: "Cualquier Tamaño",
    entryDate: "",
    departureDate: ""
};

  const [filtros, setFiltros] = useState(estadosIniciales);

  const filterSet = (e, prop) => {
    const filterChanged = {...filtros};
    filterChanged[prop] = e.target.value;
    setFiltros(filterChanged);
  };

  const filteredHotels = () => {
    const hotelsCountries = hotelsData.filter((hoteles) => {
      if (filtros.countries !== estadosIniciales.countries) {
        return hoteles.country === filtros.countries;
      }
      return true;
    });
    const hotelsPrice = hotelsCountries.filter((hoteles) => {
      if (filtros.prices !== estadosIniciales.prices) {
        return hoteles.price === filtros.prices.length;
      }
      return true;
    });
    const hotelsSize = hotelsPrice.filter((hoteles) => {
      if (filtros.sizes !== estadosIniciales.sizes) {
        if (filtros.sizes === "Pequeño") {
          return hoteles.rooms <= 10;
        } else if (filtros.sizes === "Mediano") {
          return hoteles.rooms > 10 && hoteles.rooms <= 20;
        } else {
          return hoteles.rooms > 20;
        }
      }
      return true;
    });
    const hotelsDate = hotelsSize.filter((hoteles) => {
      if (
        filtros.entryDate !== estadosIniciales.entryDate &&
        filtros.departureDate !== estadosIniciales.departureDate
      ) {
        return (
          new Date(filtros.entryDate).valueOf() >= hoteles.availabilityFrom &&
          new Date(filtros.entryDate).valueOf() <= hoteles.availabilityTo &&
          new Date(filtros.departureDate).valueOf() < hoteles.availabilityTo
        );
      }
      return true;
    });
    return hotelsDate;
  };

  return (
    <div>
    <Header />
    <Filter 
    filtros={filtros}
    filterSet={filterSet}
    />
    <Hotels 
    hotels={filteredHotels()}
    
    />
    </div>
  );
}



export default App;
