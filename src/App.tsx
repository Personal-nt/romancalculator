import { useEffect, useState } from 'react'
import Calc from './utils/calc'

function Calculator() {
    const [total] = useState(0)
    const [addend, setAddend] = useState('0')
    const [summand, setSummand] = useState('0')
    const [operator, setOperator] = useState('')

    const [totalCalc, setTotalCalc] = useState(0)
    const [tempOperation, setTempOperation] = useState(0)
    const calc = new Calc(0, 0)

    const handleNumber = (input: string) => {
        setTempOperation(0)
        setTempOperation(parseInt(input))
        if (
            addend === '0' &&
            summand === '0' &&
            operator === '' &&
            totalCalc === 0
        ) {
            setAddend(input)
        } else if (
            addend === '0' &&
            summand === '0' &&
            operator !== '' &&
            totalCalc > 0
        ) {
            setAddend(totalCalc.toString())
        } else if (
            addend !== '0' &&
            summand === '0' &&
            operator === '' &&
            totalCalc === 0
        ) {
            setAddend((prev) => (prev += input))
        } else if (
            addend !== '0' &&
            summand === '0' &&
            operator === '' &&
            totalCalc > 0
        ) {
            setSummand(input)
        } else if (
            addend !== '0' &&
            summand === '0' &&
            operator !== '' &&
            totalCalc === 0
        ) {
            setSummand(input)
        } else if (
            addend !== '0' &&
            summand === '0' &&
            operator !== '' &&
            totalCalc > 0
        ) {
            setSummand(input)
        } else if (
            addend !== '0' &&
            summand !== '0' &&
            operator === '' &&
            totalCalc > 0
        ) {
            setSummand((prev) => (prev += input))
        } else if (addend !== '0' && summand !== '0' && operator !== '') {
            setSummand((prev) => (prev += input))
        }
    }

    const handleOperator = (input: string) => {
        if (operator === '') {
            setOperator(input)
        } else if (
            addend !== '0' &&
            summand !== '0' &&
            operator === '' &&
            totalCalc > 0
        ) {
            setOperator(input)
            calculateResult(parseInt(addend), parseInt(summand), operator)
            setAddend(calc.getTotal().toString())
            setSummand('0')
            setOperator('')
            setTotalCalc(calc.getTotal())
        } else if (
            addend !== '0' &&
            summand !== '0' &&
            operator !== '' &&
            totalCalc >= 0
        ) {
            calculateResult(parseInt(addend), parseInt(summand), operator)
            setAddend(calc.getTotal().toString())
            setSummand('0')
            setOperator('')
            setTotalCalc(calc.getTotal())
        }
    }

    const handleEqaulsTo = () => {
        setTempOperation(0)
        if (addend !== '' && summand !== '' && operator !== '') {
            calculateResult(parseInt(addend), parseInt(summand), operator)
            setAddend(calc.getTotal().toString())
            setSummand('0')
            setOperator('')
            setTotalCalc(calc.getTotal())
        } else {
            return
        }
    }

    useEffect(() => {
        console.log('addend useEffect: ', addend)
        console.log('summand useEffect: ', summand)
        console.log('total useEffect: ', totalCalc)
        console.log('operator useEffect: ', operator)
    }, [addend, summand, totalCalc, operator])

    const clearTotal = () => {
        setTotalCalc(calc.getTotal())
        setAddend('0')
        setSummand('0')
        setOperator('')
    }

    const calculateResult = (
        addendNum: number,
        summandNum: number,
        operator: string,
    ) => {
        switch (operator) {
            case '+':
                calc.add(addendNum, summandNum)
                break
            case '-':
                calc.subs(addendNum, summandNum)
                break
            case '*':
                calc.mult(addendNum, summandNum)
                break
            case '/':
                calc.div(addendNum, summandNum)
                break
            default:
                console.log('error')
        }
        setAddend(total.toString())
    }

    function numberToRoman(num: number): string {
        if (isNaN(num) || num < 0 || num >= 4000) {
            // throw new Error('Number out of range for Roman numerals (1-3999)')
            return ''
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
    const tc = totalCalc

    const romanNumber = numberToRoman(tc)

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-900">
            <div className="flex h-full flex-col items-center justify-center">
                <h3 className="mb-2 hidden text-lg font-bold text-teal-400 md:flex">
                    NICO's ROMAN CALCULATOR
                </h3>
                <div className="h-[80%] w-screen rounded-lg bg-gray-800 p-4 text-teal-400 shadow-md md:h-auto md:w-80 md:p-8">
                    <div className="h-[100px] border-b border-gray-700 pb-0 md:pb-4">
                        <div className="h-2/3 flex justify-end items-center text-right text-4xl pr-3 font-bold text-gray-300">
                            {romanNumber}
                        </div>
                        <div className="text-right text-xl text-gray-600 pr-3 flex justify-end items-center">
                            {tempOperation > 0
                                ? tempOperation
                                : totalCalc.toFixed(0)}
                        </div>
                    </div>
                    <div className="mt-6 grid h-[80%] grid-cols-4 gap-4 text-2xl md:h-auto md:text-lg">
                        <button
                            onClick={() => clearTotal()}
                            className="col-span-2 rounded-lg bg-pink-900 p-0 md:p-2 text-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            Clear 🗑️
                        </button>
                        <button
                            onClick={() => handleOperator('/')}
                            className={`rounded-lg text-2xl ${
                                operator === '/' ? 'border border-teal-600' : ''
                            } bg-teal-900 shadow-lg transition duration-300 ease-in-out hover:bg-teal-800 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner`}
                        >
                            /
                        </button>
                        <button
                            onClick={() => handleOperator('*')}
                            className={`rounded-lg text-2xl ${
                                operator === '*' ? 'border border-teal-600' : ''
                            } bg-teal-900 shadow-lg transition duration-300 ease-in-out hover:bg-teal-800 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner`}
                        >
                            x
                        </button>
                        <button
                            onClick={() => handleNumber('7')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 p-0 md:p-2 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            VII
                        </button>
                        <button
                            onClick={() => handleNumber('8')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            VIII
                        </button>
                        <button
                            onClick={() => handleNumber('9')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            IX
                        </button>
                        <button
                            onClick={() => handleOperator('-')}
                            className={`rounded-lg text-2xl ${
                                operator === '-' ? 'border border-teal-600' : ''
                            } bg-teal-900 shadow-lg transition duration-300 ease-in-out hover:bg-teal-800 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner`}
                        >
                            -
                        </button>
                        <button
                            onClick={() => handleNumber('4')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 p-0 md:p-2 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            IV
                        </button>
                        <button
                            onClick={() => handleNumber('5')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            V
                        </button>
                        <button
                            onClick={() => handleNumber('6')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            VI
                        </button>
                        <button
                            onClick={() => handleOperator('+')}
                            className={`rounded-lg text-2xl ${
                                operator === '+' ? 'border border-teal-600' : ''
                            } bg-teal-900 shadow-lg transition duration-300 ease-in-out hover:bg-teal-800 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner`}
                        >
                            +
                        </button>
                        <button
                            onClick={() => handleNumber('1')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 p-0 md:p-2 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            I
                        </button>
                        <button
                            onClick={() => handleNumber('2')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            II
                        </button>
                        <button
                            onClick={() => handleNumber('3')}
                            className="scale-[1] rounded-lg bg-gray-600 bg-opacity-30 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        >
                            III
                        </button>
                        <button
                            onClick={() => handleEqaulsTo()}
                            className={`row-span-2 rounded-lg bg-teal-900 text-2xl shadow-lg transition duration-300 ease-in-out hover:bg-teal-800 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner`}
                        >
                            =
                        </button>
                        <button
                            disabled
                            className="col-span-3 scale-[1] rounded-lg bg-gray-600 bg-opacity-30 p-0 md:p-2 shadow-lg transition duration-300 ease-in-out hover:scale-[103%] hover:bg-opacity-50 hover:shadow-xl focus:outline-none active:translate-y-[2px] active:shadow-inner"
                        ></button>
                        <button disabled className="rounded-lg"></button>
                    </div>
                </div>
                <div className="mt-6 hidden w-[300px] text-center text-teal-400 text-opacity-40 md:flex">
                    Currently, this calculator doesnt work following the PEMDAS
                    model
                </div>
            </div>
        </div>
    )
}

export default Calculator
