
function CalculatorButtons({
  onNumberClick,
  onClear,
  onDelete,
  onDecimal,
  onOperation,
  onEquals
}) {
  return (
    <div className="buttons">
      <button className="operator" onClick={onClear}>AC</button>
      <button className="operator" onClick={onDelete}>DEL</button>
      <button className="operator" onClick={() => onOperation("%")}>%</button>
      <button className="operator" onClick={() => onOperation("/")}>/</button>
      
      <button onClick={() => onNumberClick("7")}>7</button>
      <button onClick={() => onNumberClick("8")}>8</button>
      <button onClick={() => onNumberClick("9")}>9</button>
      <button className="operator" onClick={() => onOperation("*")}>×</button>

      <button onClick={() => onNumberClick("4")}>4</button>
      <button onClick={() => onNumberClick("5")}>5</button>
      <button onClick={() => onNumberClick("6")}>6</button>
      <button className="operator" onClick={() => onOperation("-")}>-</button>

      <button onClick={() => onNumberClick("1")}>1</button>
      <button onClick={() => onNumberClick("2")}>2</button>
      <button onClick={() => onNumberClick("3")}>3</button>
      <button className="operator" onClick={() => onOperation("+")}> + </button>

      <button className="zero" onClick={() => onNumberClick("0")}>
        0
      </button>

      <button onClick={onDecimal}>.</button>
      <button className="equal" onClick={onEquals}>=</button>
    </div>
  );
}

export default CalculatorButtons;
