/* eslint-disable react/prop-types */

const Dice = ({ numbers, holdDice }) => {
  return (
    <div className="flex justify-center flex-wrap md:w-3/5 sm:w-4/5 bg-gray-300 rounded-xl shadow-xl px-5 py-10 md:py-16 gap-8">
      {numbers.map((number) => (
        <div
          onClick={() => holdDice(number.id)}
          key={number.id}
          className={`${
            number.isHeld === true ? "bg-green-600 text-white shadow-xl" : ""
          }, shadow-lg rounded-md bg-gray-100 cursor-pointer`}
        >
          <p className="font-bold text-2xl py-4 px-6 ">{number.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dice;
