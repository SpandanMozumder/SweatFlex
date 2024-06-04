import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import axios from "axios";

const BodyPart = () => {

  return (
    <div className="flex flex-row">
      <div>
        <Navbar />
      </div>

      <div className="ml-[7rem]">
        <h1>Search Exercises Based OnYour Preferred Body Part</h1>
        <div>
          
        </div>
        <Background />
      </div>
    </div>
  );
};

export default BodyPart;
