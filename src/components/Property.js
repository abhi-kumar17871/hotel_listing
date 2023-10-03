import React, { useState } from "react";
import data from "../assets/data.json";
import CityTabs from "./CityTabs";
import PropertyList from "./PropertyList";

function App() {
  const [activeCity, setActiveCity] = useState(data.cities[0]);

  return (
    <div className="m-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-bold">Featured Listed Property</div>
        <div className="text-lg">
          Real estate can be bought,sold,leased,or rented, and can be a
        </div>
        <div className="text-lg">
          valuable investment opportunity. The value of real estate can be...
        </div>
      </div>
      <CityTabs
        cities={data.cities}
        activeCity={activeCity}
        setActiveCity={setActiveCity}
      />
      <div>
        <PropertyList properties={activeCity.properties} />
      </div>
    </div>
  );
}

export default App;
