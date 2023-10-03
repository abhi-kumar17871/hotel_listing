import React from "react";
import { Link } from "react-router-dom";
import { BiBuildingHouse } from "react-icons/bi";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="bg-white p-3 drop-shadow-lg rounded-lg m-2 z-0">
        <div className="w-full">
          <img
            src={property.image}
            className="rounded-lg w-full h-[15rem]"
            alt={property.name}
          />
        </div>
        <div className="absolute top-6 left-5 bg-white text-blue-700 px-3 py-1 text-md font-medium rounded-2xl">
          {property.rent === "true" ? <div>For Rent</div> : <div>For Sale</div>}
        </div>
        <div className="absolute top-6 right-5 bg-white p-2  text-blue-700 rounded-2xl">
          <AiOutlineHeart />
        </div>
        {property.popular === "true" ? (
          <div>
            <div className="absolute z-0 top-[14rem] left-[-0.5rem] text-white p-2  bg-blue-700 rounded-r-md rounded-tl-md">
              <div className="px-8 text-md font-semibold">Popular</div>
            </div>
            <div className="absolute -z-10 top-[16.3rem] left-[-0.5rem] text-white p-1  bg-blue-900 rounded-l-full"></div>
          </div>
        ) : null}
        <div className="flex flex-col py-2">
          <div className="mx-2 py-2 flex items-center">
            <CiLocationOn className="mr-1" /> {`${property.address}`}
          </div>
          <div className="text-xl font-semibold px-2">{property.name}</div>
        </div>
        <div className="grid grid-cols-4 mx-5 text-md font-semibold">
          <div>
            <BiBuildingHouse className="text-sky-500 text-lg" />
            {`${property.room} Room`}
          </div>
          <div>
            <LiaBedSolid className=" text-sky-500 text-lg" />{" "}
            {`${property.bed} Bed`}
          </div>
          <div>
            <LiaBathSolid className="text-sky-500 text-lg" />{" "}
            {`${property.bath} Bath`}
          </div>
          <div>
            <BsArrowsMove className="mx-2 text-sky-500 text-lg" />{" "}
            {`${property.area} sft`}
          </div>
        </div>
        <hr className="h-px my-4  border-0 bg-gray-300" />
        <div className="flex justify-between py-2">
          <div className="text-xl font-semibold px-2">
            <span className="text-2xl">{`${property.price}`}</span>
            <span className="font-normal text-sm">/month</span>
          </div>
          <div className="flex items-center">
            <button className="bg-sky-500 rounded-2xl px-3 py-2 text-white font-semibold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
