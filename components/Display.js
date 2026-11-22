
function Display({ currentOperand, previousOperand, operation }) {
  return (
    <div className="display">
      <div className="previous-operand">
        {previousOperand !== null && operation
          ? `${previousOperand} ${operation}`
          : ""}
      </div>

      <div className="current-operand">
        {currentOperand}
      </div>
    </div>
  );
}

export default Display;
