import React, { useState } from "react";

function Calc() {
  const [displayValue, setDisplayValue] = useState(0);
  const [prevvalue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (e) => {
    const value = e.target.value;
    setDisplayValue(displayValue === "0" ? value : displayValue + value);
  };
  const handleOperatorClick = (e) => {
    const value = e.target.value;
    setPrevValue(displayValue);
    setOperation(value);
    setDisplayValue("0");
  };

  const handleEqual = () => {
    let result;
    const currentValue = parseFloat(displayValue);
    if (operation === "+") {
      result = parseFloat(prevvalue) + currentValue;
    } else if (operation === "-") {
      result = parseFloat(prevvalue) - currentValue;
    } else if (operation === "*") {
      result = parseFloat(prevvalue) * currentValue;
    } else if (operation === "/") {
      result = parseFloat(prevvalue) / currentValue;
    }

    setDisplayValue(result.toString());
    setPrevValue(null);
    setOperation(null);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setPrevValue(null);
    setOperation(null);
  };

  return (
    <>
      <div>
        <h1> My Calculator </h1>
        <br /> <br />
      </div>
      <div>
        <input type="text" value={displayValue} readOnly></input>
        <br />
        <button value="1" onClick={handleClick}>
          {" "}
          1{" "}
        </button>
        <button value="2" onClick={handleClick}>
          {" "}
          2{" "}
        </button>
        <button value="3" onClick={handleClick}>
          {" "}
          3{" "}
        </button>
        <button value="+" onClick={handleOperatorClick}>
          {" "}
          +{" "}
        </button>
        <br />
        <button value="4" onClick={handleClick}>
          {" "}
          4{" "}
        </button>
        <button value="5" onClick={handleClick}>
          {" "}
          5{" "}
        </button>
        <button value="6" onClick={handleClick}>
          {" "}
          6{" "}
        </button>
        <button value="-" onClick={handleOperatorClick}>
          {" "}
          -{" "}
        </button>
        <br />
        <button value="7" onClick={handleClick}>
          {" "}
          7{" "}
        </button>
        <button value="8" onClick={handleClick}>
          {" "}
          8{" "}
        </button>
        <button value="9" onClick={handleClick}>
          {" "}
          9{" "}
        </button>
        <button value="*" onClick={handleOperatorClick}>
          {" "}
          *{" "}
        </button>
        <br />
        <button onClick={handleClear}> Clear </button>
        <button value="0" onClick={handleClick}>
          {" "}
          0{" "}
        </button>
        <button value="/" onClick={handleOperatorClick}>
          {" "}
          /{" "}
        </button>
        <br />
        <button onClick={handleEqual}> = </button>
      </div>
    </>
  );
}

export default Calc;
