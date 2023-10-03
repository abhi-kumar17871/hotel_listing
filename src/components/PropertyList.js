import React, { useState } from "react";
import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  const [visibleProperties, setVisibleProperties] = useState(6);

  const handleShowMore = () => {
    setVisibleProperties((prevVisibleProperties) => prevVisibleProperties + 3);
  };

  return (
    <div className="mx-20">
      <div className="grid grid-cols-3">
        {properties.slice(0, visibleProperties).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {visibleProperties < properties.length && (
        <div className="text-center mt-4">
          <button
            className="bg-sky-500 rounded-full px-4 py-2 text-white font-semibold"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default PropertyList;
