
"use client";

import { useState } from "react";
import Display from "./Display";
import CalculatorButtons from "./CalculatorButton";

function Calculator() {
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState(null);
  const [operation, setOperation] = useState(null);

  // Handle number buttons
  function handleNumberClick(number) {
    if (currentOperand === "0") {
      setCurrentOperand(number);
    } else {
      setCurrentOperand(currentOperand + number);
    }
  }

  // Clear calculator
  function handleClear() {
    setCurrentOperand("0");
    setPreviousOperand(null);
    setOperation(null);
  }

  // Delete last digit
  function handleDelete() {
    if (currentOperand.length === 1) {
      setCurrentOperand("0");
    } else {
      setCurrentOperand(currentOperand.slice(0, -1));
    }
  }
  //Handle decimal button
  function handleDecimal(){
    if(!currentOperand.includes(".")){
        setCurrentOperand(currentOperand + ".");
    }
  }
//add and subtract
  function handleOperation(selectedOperation) {
    setPreviousOperand(currentOperand);
    setOperation(selectedOperation);
    setCurrentOperand("0");
  }
  // Handle equals button
  
function handleEquals() {
  if (previousOperand === null || operation === null) {
    return;
  }

  const firstNumber = parseFloat(previousOperand);
  const secondNumber = parseFloat(currentOperand);

  let result;

  switch (operation) {
    case "+":
      result = firstNumber + secondNumber;
      break;

    case "-":
      result = firstNumber - secondNumber;
      break;

    case "*":
      result = firstNumber * secondNumber;
      break;

    case "/":
      if (secondNumber === 0) {
        setCurrentOperand("Cannot divide by zero");
        setPreviousOperand(null);
        setOperation(null);
        return;
      }
      result = firstNumber / secondNumber;
      break;

    case "%":
      result = (firstNumber * secondNumber) / 100;
      break;

    default:
      return;
  }

  if (!Number.isFinite(result)) {
    setCurrentOperand("Error");
  } else {
    setCurrentOperand(String(Number(result.toFixed(10))));
  }

  setPreviousOperand(null);
  setOperation(null);
}



  return (
    <div className="calculator">
      <Display currentOperand={currentOperand} />

      <CalculatorButtons
        onNumberClick={handleNumberClick}
        onClear={handleClear}
        onDelete={handleDelete}
        onDecimal={handleDecimal}
        onOperation={handleOperation}
        onEquals={handleEquals}
      />
    </div>
  );
}

export default Calculator;
