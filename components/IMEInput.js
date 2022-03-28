import { useCallback, useState } from "react";
import { isJapanese, toKana } from "wanakana";

export default ({onSubmit}) => {
  const [value, setValue] = useState("");
  const [hasErr, setHasErr] = useState(false);

  const handleInput = useCallback((e) => {
    e.preventDefault();

    let newValue = toKana(e.target.value, { IMEMode: true });
    setValue(newValue);
    setHasErr(false);
  }, []);

  const checkSubmit = useCallback((e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  });

  const clear = () => setValue("");

  const handleSubmit = () => {
    if (isJapanese(value)) {
      onSubmit(value, clear);
    } else {
      setHasErr(true);
    }
  };

  return <>
    <input onChange={handleInput} onKeyDown={checkSubmit} value={value} type="text" />
    <style jsx>{`
      input {
        width: 90vw;
        height: 5rem;
        font-size: 2rem;
        text-align: center;
        border: ${hasErr ? "2px solid red" : "none"};
        border-radius: 2px;
      }

      input:focus {
        outline: 1px solid black;
      }
    `}</style>
  </>
}