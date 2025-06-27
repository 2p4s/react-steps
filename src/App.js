import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //check import, set a default and return it
  //const arr = useState(1);
  //define the variable, its method and a default. anything with "use" is a React Hook
  const [step, setStep] = useState(1);

  //create event handlers in the component
  function handlePrevious() {
    //alert("Previous");
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handleNext() {
    //alert(step);
    if (step < messages.length) {
      setStep(step + 1);
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      {/* use arrow method function to attach a function */}
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious} //do not call it ie. handlePrevious() as it will run, needs to be just a function to it
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
