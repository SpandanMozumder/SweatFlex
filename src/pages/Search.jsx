import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async() => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      console.log(exerciseData);
    }
  };

  return (
    <div className="flex flex-row">
      <div>
        <Navbar />
      </div>

      <div className="ml-[7rem] flex flex-col gap-4 justify-center items-center w-full h-[100vh]">
        <h1>Awesome Exercises You Should Know</h1>
        <input
          className="p-2 w-[50rem] border border-gray-500 rounded-lg"
          type="text"
          placeholder="Search for exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="bg-red-600 h-[2rem] w-[7rem] rounded-md text-white border hover:bg-white hover:text-red-600 hover:border-red-600 transition-all"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <Background />
    </div>
  );
};

export default Search;
