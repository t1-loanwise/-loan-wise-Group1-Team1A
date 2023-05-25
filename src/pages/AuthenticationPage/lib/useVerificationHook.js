import { useState, useEffect } from "react";

export default function useVerificationHook(codeLength) {
  const [inputStates, setInputStates] = useState([]);
  const [code, setCode] = useState(null);

  useEffect(() => {
    let finalCode = inputStates
      .map((input) => {
        return input.digit;
      })
      .join("");
    if (finalCode.length === codeLength) {
      setCode(finalCode);
    } else setCode(null);
  }, [inputStates, codeLength]);

  useEffect(() => {
    let inputs = [];
    for (let index = 0; index < codeLength; index++) {
      inputs.push({
        digit: "",
        setDigit: (value) => {
          // Initialize setDigit function
          setInputStates((prevInputStates) => {
            // Update input states array
            const newInputStates = [...prevInputStates];
            newInputStates[index].digit = value;
            return newInputStates;
          });
        },
      });
    }
    setInputStates(inputs);
  }, [codeLength]);

  const inputClass = "code-digit";

  const handleChange = (event, i) => {
    let entry = event.target.value;
    if (entry.length <= 1 && !Number.isNaN(entry)) {
      inputStates[i].setDigit(event.target.value);
      if (entry.length === 1) {
        if (i < codeLength - 1) {
          let nextInput = document.querySelectorAll(`.${inputClass}`)[i + 1];
          if (nextInput.value === "") nextInput.focus();
        } else if (entry.length === 0) {
          let prevInput = document.querySelectorAll(`.${inputClass}`)[i - 1];
          if (prevInput !== undefined) prevInput.focus();
        }
      } else return;
    }
  };

  const handleKeyDown = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  return { code, inputStates, inputClass, handleChange, handleKeyDown };
}
