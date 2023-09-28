/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Dice from "../components/Dice";
import { diceNumber } from "../components/utils";

const Home = () => {
  const [number, setNumber] = useState(diceNumber);

  return (
    <div>
      <div className="h-screen flex flex-wrap justify-center items-center">
        <Dice numbers={number} />
      </div>
    </div>
  );
};

export default Home;
