import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const handleClick = (value) => {
    setDisplay(display + value);
  };
  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch (error) {
      setDisplay("Error");
    }
  };
  const handleBackSpace = () => {
    setDisplay((display) => display.slice(0, -1));
  };
  const clearDisplay = () => {
    setDisplay("");
  };
  return (
    <div className="calc">
      <div className="main">
        <div className="display">{display}</div>
        <div className="buttons">
          <div className="row">
            <div className="col clear" onClick={() => clearDisplay()}>
              C
            </div>
            <div className="del" onClick={handleBackSpace}>
              DEL
            </div>

            <div className="col operation" onClick={() => handleClick("/")}>
              /
            </div>
          </div>
          <div className="row">
            <div className="col" onClick={() => handleClick(7)}>
              7
            </div>
            <div className="col" onClick={() => handleClick(8)}>
              8
            </div>
            <div className="col" onClick={() => handleClick(9)}>
              9
            </div>
            <div className="col operation" onClick={() => handleClick("*")}>
              x
            </div>
          </div>
          <div className="row">
            <div className="col" onClick={() => handleClick(4)}>
              4
            </div>
            <div className="col" onClick={() => handleClick(5)}>
              5
            </div>
            <div className="col" onClick={() => handleClick(6)}>
              6
            </div>
            <div className="col operation" onClick={() => handleClick("-")}>
              -
            </div>
          </div>
          <div className="row">
            <div className="col" onClick={() => handleClick(1)}>
              1
            </div>
            <div className="col" onClick={() => handleClick(2)}>
              2
            </div>
            <div className="col" onClick={() => handleClick(3)}>
              3
            </div>
            <div className="col operation" onClick={() => handleClick("+")}>
              +
            </div>
          </div>
          <div className="row">
            <div className="col" onClick={() => handleClick(0)}>
              0
            </div>
            <div className="col" onClick={() => handleClick(".")}>
              .
            </div>

            <div className="equal" onClick={() => calculateResult()}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
