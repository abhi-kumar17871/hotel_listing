import React from "react";
import { BsArrowRight } from "react-icons/bs";

function CityTabs({ cities, activeCity, setActiveCity }) {
  return (
    <div className="flex justify-between mx-20">
      <div className="flex ">
        {cities.map((city) => (
          <button
            key={city.id}
            className={`px-2 py-1 rounded-lg text-semibold m-3 w-[6rem] ${
              city.id === activeCity.id
                ? "bg-blue-700 text-white"
                : "bg-blue-200"
            }`}
            onClick={() => setActiveCity(city)}
          >
            {city.name}
          </button>
        ))}
      </div>
      <div className="px-3 py-2 m-3 flex items-center rounded-2xl border border-solid-1 text-blue-600 font-bold border-blue-600">
        View All <BsArrowRight />
      </div>
    </div>
  );
}

export default CityTabs;
