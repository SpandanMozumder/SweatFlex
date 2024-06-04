import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../assets/banner.png";
import { Link } from "react-router-dom";
import Background from "../components/Background";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Navbar />

      <div className="flex flex-row w-full ml-[5rem]">
        <div className="w-[61%] p-10">
          <h1 className="text-bold text-red-600 text-7xl m-5">SweatFlex</h1>
          <h1 className="text-semibold text-4xl m-5">
            We're not here to just flex, we're here to SweatFlex!
          </h1>
          <p className="text-normal text-2xl m-5">
            Get Fit and Flexible, all in one place.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-[5rem] m-5">
            <Link to="/search">
              <button className="bg-gray-300 w-[20rem] h-[3rem] rounded-lg text-black border border-gray-500 shadow-sm shadow-gray-300 hover:bg-gray-400 transition-colors">
                Search Exercises
              </button>
            </Link>
            <Link to="/discover">
              <button className="bg-gray-300 w-[20rem] h-[3rem] rounded-lg text-black border border-gray-500 shadow-sm shadow-gray-300 hover:bg-gray-400">
                Discover New
              </button>
            </Link>
            <Link to="/bodypart">
              <button className="bg-gray-300 w-[20rem] h-[3rem] rounded-lg text-black border border-gray-500 shadow-sm shadow-gray-300 hover:bg-gray-400">
                Search based on Body Part
              </button>
            </Link>
            <Link to="/equipment">
              <button className="bg-gray-300 w-[20rem] h-[3rem] rounded-lg text-black border border-gray-500 shadow-sm shadow-gray-300 hover:bg-gray-400">
                Search based on Equipment
              </button>
            </Link>
            <Link to="/target">
              <button className="bg-gray-300 w-[20rem] h-[3rem] rounded-lg text-black border border-gray-500 shadow-sm shadow-gray-300 hover:bg-gray-400">
                Search based on Target Muscle
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[39%]">
          <img src={HeroImg} alt="hero" className="w-[32rem] mt-5" />
        </div>
      </div>

      <Background />
    </div>
  );
};

export default Home;
