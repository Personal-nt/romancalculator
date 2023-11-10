import { useEffect, useState } from "react";
import { Calc } from './utils/calc'
// import ButtonWrapper from "./components/ButtonWrapper";

function Calculator() {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState<any[]>([]);
  const [operation, setOperation] = useState<any[]>([])
  const [operator, setOperator] = useState("");
  // const [clear, setClear] = useState(false);


  const handleOperation = (input: string | number, operator?: string) => {
    if (typeof input === "number") {
      if (operator === "") {
        // setTotal((prevTotal) => prevTotal + input);
        setCurrent((prev) => [...prev, input]);
      } else {
        setCurrent((prev) => [...prev, input]);
      }
    }
    if (typeof input === "string") {
      setOperator(input);
      const currentNum = current.join("");
      calculateResult(parseInt(currentNum), operator ? operator : input);
    }
  };

  const clearTotal = () => {
    setTotal(0);
    setCurrent([]);
    setOperator("");
    setOperation([]);
  };

  const calculateResult = (currentNum: number, operator: string) => {
    switch (operator) {
      case "+":
        setTotal((prevTotal) => prevTotal + currentNum);
        break;
      case "-":
        setTotal((prevTotal) => prevTotal - currentNum);
        break;
      case "*":
        setTotal((prevTotal) => prevTotal * currentNum);
        break;
      case "/":
        setTotal((prevTotal) => prevTotal / currentNum);
        break;
      default:
        setTotal(currentNum); // If no operator is provided, set the current number as the total.
    }
    setCurrent([]);
    setOperator("");
  };

  function numberToRoman(num: number): string {
    if (isNaN(num) || num < 0 || num >= 4000) {
      throw new Error("Number out of range for Roman numerals (1-3999)");
    }
  
    const romanNumerals: [string, number][] = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
  
    let result = "";
    let remaining = num;
  
    for (const [roman, value] of romanNumerals) {
      while (remaining >= value) {
        result += roman;
        remaining -= value;
      }
    }
  
    return result;
  }
  const test = total;

  const romanNumber = numberToRoman(test);
  console.log("total:", total);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className=" w-80 bg-white rounded-lg shadow-md p-12 dark:bg-gray-800 text-teal-400">
        <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
          <div className="text-right text-3xl font-bold mb-2 text-gray-500 dark:text-gray-300">{romanNumber}</div>
          <div className="text-right text-xl text-gray-400 dark:text-gray-600">{total}</div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <button onClick={() => clearTotal()} className="col-span-2 rounded-lg bg-pink-900 text-white">
            Clear
          </button>
          <button onClick={() => handleOperation("/", operator)} className="rounded-lg bg-teal-900">
            /
          </button>
          <button onClick={() => handleOperation("*", operator)} className="rounded-lg bg-teal-900">
            *
          </button>
          <button onClick={() =>  handleOperation(7, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            VII
          </button>
          <button onClick={() =>  handleOperation(8, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            VIII
          </button>
          <button onClick={() =>  handleOperation(9, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            IX
          </button>
          <button onClick={() => handleOperation("-", operator)} className="rounded-lg bg-teal-900">
            -
          </button>
          <button onClick={() =>  handleOperation(4, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            IV
          </button>
          <button onClick={() =>  handleOperation(5, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            V
          </button>
          <button onClick={() =>  handleOperation(6, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            VI
          </button>
          <button onClick={() => handleOperation("+", operator)} className="rounded-lg bg-teal-900">
            +
          </button>
          <button onClick={() =>  handleOperation(1, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            I
          </button>
          <button onClick={() =>  handleOperation(2, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            II
          </button>
          <button onClick={() =>  handleOperation(3, operator)} className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75">
            III
          </button>
          <button className="rounded-lg bg-teal-800 row-span-2">
            =
          </button>
          <button className="rounded-lg bg-gray-600 bg-opacity-30 hover:bg-opacity-50 scale-[1] hover:scale-[103%] transition-transform duration-75 col-span-2">
            0
          </button>
          <button disabled className="rounded-lg">
          
          </button>

        </div>
      </div>
      <small className="mt-6 w-[300px] text-teal-400 text-opacity-40 text-center">Currently this calculator doesnt work following the PEMDAS model</small>
    </div>
  );
}

export default Calculator;