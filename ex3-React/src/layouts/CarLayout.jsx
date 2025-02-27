import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { CarContext } from "../context/CarProvider";
import Sidebar from "../components/Sidebar/Sidebar";

const ProfileLayout = () => {
  const { cars } = useContext(CarContext);
  const [filters, setFilters] = useState({
    type: ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"],
    capacity: [2, 4, 6],
    price: 100,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter(
    (car) =>
      (filters.type.length === 0 || filters.type.includes(car.type)) &&
      (filters.capacity.length === 0 ||
        filters.capacity.includes(car.capacity)) &&
      parseFloat(car.price) <= filters.price &&
      (searchTerm.length < 2 ||
        car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex items-start bg-[#F6F7F9]">
        <Sidebar filters={filters} cars={cars} setFilters={setFilters} />
        <main className="px-4 lg:px-6 py-6 bg-[#F6F7F9] w-full">
          <Outlet context={{ filteredCars }} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProfileLayout;
