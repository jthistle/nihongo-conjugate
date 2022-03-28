import { useCallback, useState, useEffect } from "react";
import CommonHead from "../components/CommonHead"
import IMEInput from "../components/IMEInput"

import conjugate from "../components/conjugate";
import { dictionary, forms, formNames, formMeanings } from "../components/data";

// shim
String.prototype.replaceAll = function replaceAll(a, b) {
  let s = this;
  let last;
  do {
    last = s;
    s = s.replace(a, b);    
  } while (last !== s);

  return s;
}

const randint = (low, high) => (
  low + Math.floor(Math.random() * (high - low))
)

const randchoice = (arr) => (
  arr[randint(0, arr.length)]
)

export default () => {
  const onSubmit = useCallback((val, clear) => {
    const correct = conjugate(verb, form);
    if (val.trim() === correct) {
      setVerb(randchoice(dictionary));
      setForm(randchoice(forms));
      setFeedback("Good job!");
    } else {
      setFeedback(`Not quite... you want ${correct}. Type to continue.`);
    }
    clear();
  });

  const [verb, setVerb] = useState(dictionary[0]);
  const [form, setForm] = useState(forms[0]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setVerb(randchoice(dictionary));
    setForm(randchoice(forms));
  }, []);

  let meaning = formMeanings[form].replaceAll("%inf%", verb.english.inf).replaceAll("%imp%", verb.english.imp);

  return <>
    <CommonHead>
      <title>untitled</title>
    </CommonHead>
    <div className="content">
      <div className="question">
        <span className="small">
          {verb.display ? verb.base + ", " : "" }to {verb.english.inf}
        </span><br />
        <span className="big">{verb.display || verb.base}</span><br />
        <span> 
          <b>{meaning}</b>
        </span><br />
        <span className="small">
          ({formNames[form]})
        </span><br />
      </div>
      <div className="answer">
        <IMEInput onSubmit={onSubmit} />
        <div className="feedback">
          {feedback}
        </div>
      </div>
    </div>
    <style jsx>{`
      .content {
        display: flex;    
        flex-direction: column;
        background: #cbd9dd;
        min-height: 100vh;
        text-align: center;
      }
      
      .question {
        background-color: ${ form.slice(form.length - 4) === "long" ? "#5710a8" : "#17b012" };
        color: white;
        font-size: 3rem;
        padding: 2rem 0;
        min-height: 25rem;
      }
      
      .question .big {
        font-size: 6rem;
      }

      .question .small {
        font-size: 2rem;
      }

      .answer {
        padding-top: 1rem;
      }

      .feedback {
        font-size: 1.5rem;
        padding: 0.5rem 0;
      }
    `}</style>
  </>
}
