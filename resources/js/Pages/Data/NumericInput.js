import react from "react";
import { useRef } from "react";
import { _renderNumeric } from "./utils/number";


const NumericInput = ({ value = 0, onChange, className, data, ...props }) => {
  const inputRef = useRef()

  const handleChange = (e) => {
    let rawText = e.target.value
    let numberText = rawText.replace(/\D/g, '')
    let result = numberText

    // if (allowNegative) {
    //   result = handleNegativeValue(rawText, numberText)
    // }

    onChange(Number(result))
  }

  return (
    <>
      <input
        className={`${className}`}
        defaultValue={`${_renderNumeric(value)}`}
        onChange={handleChange}
        onClick={() => inputRef?.current?.click}
        onFocus={() => inputRef?.current?.focus}
        {...props}
      />
      <input
        ref={inputRef}
        hidden
        value={value}
        onChange={() => { }}
      />
    </>
  )
}

export default NumericInput;
