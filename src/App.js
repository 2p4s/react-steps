import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>some re-usable content</p>
        <p>😁</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  //check import, set a default and return it
  //const arr = useState(1);
  //define the variable, its method and a default. anything with "use" is a React Hook
  //always use the set method to update
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

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
    <div>
      {/* define function here as its simple */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        //have to use Javascript mode as we're doing a conditional
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#d7d7d7"
                textColor="#333"
                onClick={() => alert("I am a button")}
              >
                Alert
              </Button>
            </div>
          </StepMessage>

          {/* use arrow method function to attach a function */}
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👍</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>🤞</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

//child props are between open and close tag
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
