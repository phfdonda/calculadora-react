import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import calcButtons from "../utils/calcButtons";
import calculate from "../utils/calculate";


function App() {
  const [displayText, setDisplayText] = useState(0);

  function handleClick(val) {
    calculate(val, displayText, setDisplayText)
  }

  return (
    <div className="calculator">
      <Display value={displayText || 0} />
      {calcButtons.map((attributes, index) => {
        return (
          <Button
            key={index}
            id={index}
            attributes={attributes}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default App;
