/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Dice from "../components/Dice";
import { diceNumber, generateDice } from "../components/utils";
import Confetti from "react-confetti";
const Home = () => {
  const [number, setNumber] = useState(diceNumber);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = number.every((die) => die.isHeld);
    const firstValue = number[0].value;
    const allSameValue = number.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [number]);

  const rollDice = () => {
    if (!tenzies) {
      setNumber((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateDice();
        })
      );
    } else {
      setTenzies(false);
      setNumber(diceNumber);
    }
  };

  const holdDice = (id) => {
    setNumber((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {tenzies && <Confetti />}
      <h1 className="text-center font-bold text-3xl md:text-5xl py-10 md:py-20 text-green-600">
        {tenzies ? "You won the game" : "Play the dice game"}
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <Dice numbers={number} holdDice={holdDice} />
      </div>
      <button
        onClick={rollDice}
        className="bg-green-600 mt-4 md:mt-8 rounded-lg text-white py-4 px-8 shadow-lg border-none font-bold text-xl"
      >
        {tenzies ? "Start game" : "Roll"}
      </button>
    </div>
  );
};

export default Home;
