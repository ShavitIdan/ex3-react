import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import CarCard from "../components/Car/CarCard/CarCard";
import { CarContext } from "../context/CarProvider";

const Home = () => {
  const { filteredCars } = useOutletContext(); 
  const { setFilter } = useContext(CarContext);

  return (
    <div className="space-y-8 pb-10">
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setFilter(true)}
          type="button"
          className="shrink-0 lg:hidden size-10 hover:border-secondary rounded-md border border-secondary/50 text-secondary flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-filter"
            viewBox="0 0 24 24"
          >
            <path d="M22 3H2l8 9.46V19l4 2v-8.54z"></path>
          </svg>
        </button>
        <h2 className="text-xl font-bold text-dark ">Cars Catalogue</h2>
        <p className="shrink-0 pl-4 text-sm font-medium text-secondary">
          {filteredCars.length} Cars
        </p>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 xl:gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <div className="col-span-2 md:col-span-3 xl:col-span-3 2xl:col-span-4 pt-12">
            <p className="text-center text-base lg:text-xl text-secondary font-semibold w-full">
              No cars match the selected filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
