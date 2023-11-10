import { useState } from 'react'

function Calculator() {
    const [total, setTotal] = useState(0)
    const [current, setCurrent] = useState<any[]>([])
    const [operator, setOperator] = useState('')


    const handleOperation = (input: string | number, operator?: string) => {
        if (typeof input === 'number') {
            if (operator === '') {
                // setTotal((prevTotal) => prevTotal + input);
                setCurrent((prev) => [...prev, input])
            } else {
                setCurrent((prev) => [...prev, input])
            }
        }
        if (typeof input === 'string') {
          if(current.length === 0) return
            setOperator(input)
            const currentNum = current.join('')
            calculateResult(parseInt(currentNum), operator ? operator : input)
        }
    }

    const clearTotal = () => {
        setTotal(0)
        setCurrent([])
        setOperator('')
    }

    const calculateResult = (currentNum: number, operator: string) => {
        switch (operator) {
            case '+':
                setTotal((prevTotal) => prevTotal + currentNum)
                break
            case '-':
                setTotal((prevTotal) => prevTotal - currentNum)
                break
            case '*':
                setTotal((prevTotal) => prevTotal * currentNum)
                break
            case '/':
                setTotal((prevTotal) => prevTotal / currentNum)
                break
            default:
                setTotal(currentNum) // If no operator is provided, set the current number as the total.
        }
        setCurrent([])
        setOperator('')
    }

    function numberToRoman(num: number): string {
        if (isNaN(num) || num < 0 || num >= 4000) {
            throw new Error('Number out of range for Roman numerals (1-3999)')
        }

        const romanNumerals: [string, number][] = [
            ['M', 1000],
            ['CM', 900],
            ['D', 500],
            ['CD', 400],
            ['C', 100],
            ['XC', 90],
            ['L', 50],
            ['XL', 40],
            ['X', 10],
            ['IX', 9],
            ['V', 5],
            ['IV', 4],
            ['I', 1],
        ]

        let result = ''
        let remaining = num

        for (const [roman, value] of romanNumerals) {
            while (remaining >= value) {
                result += roman
                remaining -= value
            }
        }

        return result
    }
    const test = total

    const romanNumber = numberToRoman(test)

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className=" w-80 rounded-lg bg-white p-12 text-teal-400 shadow-md dark:bg-gray-800">
                <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
                    <div className="mb-2 text-right text-3xl font-bold text-gray-500 dark:text-gray-300">
                        {romanNumber}
                    </div>
                    <div className="text-right text-xl text-gray-400 dark:text-gray-600">
                        {total}
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-4">
                    <button
                        onClick={() => clearTotal()}
                        className="p-2 col-span-2 rounded-lg bg-pink-900 text-white shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        Clear 🗑️
                    </button>
                    <button
                        onClick={() => handleOperation('/', operator)}
                        className="rounded-lg bg-teal-900 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        /
                    </button>
                    <button
                        onClick={() => handleOperation('*', operator)}
                        className="rounded-lg bg-teal-900 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        x
                    </button>
                    <button
                        onClick={() => handleOperation(7, operator)}
                        className="p-2 scale-[1] rounded-lg bg-gray-600 bg-opacity-30 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        VII
                    </button>
                    <button
                        onClick={() => handleOperation(8, operator)}
                        className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 transition-transform duration-75 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        VIII
                    </button>
                    <button
                        onClick={() => handleOperation(9, operator)}
                        className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 transition-transform duration-75 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        IX
                    </button>
                    <button
                        onClick={() => handleOperation('-', operator)}
                        className="rounded-lg bg-teal-900"
                    >
                        -
                    </button>
                    <button
                        onClick={() => handleOperation(4, operator)}
                        className="p-2 scale-[1] rounded-lg bg-gray-600 bg-opacity-30 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        IV
                    </button>
                    <button
                        onClick={() => handleOperation(5, operator)}
                        className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        V
                    </button>
                    <button
                        onClick={() => handleOperation(6, operator)}
                        className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        VI
                    </button>
                    <button
                        onClick={() => handleOperation('+', operator)}
                        className="rounded-lg bg-teal-900"
                    >
                        +
                    </button>
                    <button
                        onClick={() => handleOperation(1, operator)}
                        className="p-2 scale-[1] rounded-lg bg-gray-600 bg-opacity-30 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        I
                    </button>
                    <button
                        onClick={() => handleOperation(2, operator)}
                        className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        II
                    </button>
                    <button
                        onClick={() => handleOperation(3, operator)}
                        className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]"
                    >
                        III
                    </button>
                    <button className="row-span-2 rounded-lg bg-teal-800">
                        =
                    </button>
                    <button disabled className="p-2 col-span-3 scale-[1] rounded-lg bg-gray-600 bg-opacity-30 hover:scale-[103%] hover:bg-opacity-50 shadow-lg focus:outline-none hover:shadow-xl transition duration-300 ease-in-out active:shadow-inner active:translate-y-[2px]">
                        
                    </button>
                    <button disabled className="rounded-lg"></button>
                </div>
            </div>
            <small className="mt-6 w-[300px] text-center text-teal-400 text-opacity-40">
                Currently this calculator doesnt work following the PEMDAS model
            </small>
        </div>
    )
}

export default Calculator
