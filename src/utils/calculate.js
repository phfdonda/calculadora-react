function calculate(val, displayText, setDisplayText) {
  const dTxt = displayText.toString();
  const isNumber = /[0-9]/.test(val);
  const hasDot = /\./.test(dTxt);
  const noDotInThisNumber = /[+\-/*]\d+$/.test(dTxt)
  const hasZeroBefore = /^0/.test(dTxt);
  const isOperation = (val) => /[+\-/*]/.test(val);
  const tooMuchOperation = isOperation(val) && isOperation(dTxt.slice(-1));
  const badEnding = /[+-/*]$/.test(dTxt);
  const clear = () => setDisplayText(0);
  const deleteOne = () => setDisplayText(dTxt.slice(0, -1));
  let valType = val;
  if(isNumber) valType = 'number'
  if(isOperation(val)) valType = 'operator'

  function handleOperator() {
    if (tooMuchOperation) {
      setDisplayText(dTxt.slice(0, -1) + val);
    }else{
      setDisplayText((prev) => prev + val);
    }
  }
  function handleNumber() {
    if (hasZeroBefore) {
      setDisplayText(val);
    } else {
      setDisplayText((prev) => prev + val);
    }
  }
  function handleDot() {
    if (hasDot) {
      if(noDotInThisNumber){
        setDisplayText((prev) => prev + val);
      }
      else{}
    } else {
      setDisplayText((prev) => prev + val);
    }
  }
  function calc() {
    if (badEnding) {
      setDisplayText(eval(dTxt.slice(0, -1)));
    } else {
      let result = eval(dTxt).toString()
      if(result.length > 12){
        result = result.substring(0,9) + "..."
        setDisplayText(result);
      }else{
        setDisplayText(result);
      }
    }
  }

  const mapCalcFunctions = {
    AC: () => clear(),
    C: () => deleteOne(),
    "=": () => calc(),
    ".": () => handleDot(),
    number:() => handleNumber(),
    operator: () => handleOperator(),
  };

  mapCalcFunctions[valType]()
}
export default calculate;
