/* eslint-disable react/prop-types */
const Dice = ({ numbers }) => {
  return (
    <div className="flex justify-center flex-wrap w-1/2 sm:w4/5 bg-gray-300 rounded-xl shadow-xl px-5 py-16 gap-8">
      {numbers.map((number, index) => (
        <div
          key={index}
          className="shadow-lg rounded-md bg-gray-100 cursor-pointer hover:bg-green-600 hover:text-white hover:shadow-xl"
        >
          <p className="font-bold text-2xl py-4 px-6 ">{number}</p>
        </div>
      ))}
    </div>
  );
};

export default Dice;
//ok
