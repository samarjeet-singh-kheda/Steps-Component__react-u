import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Step() {
  // const step = 1;
  const [step, setStep] = useState(1);

  // console.log(useState("9999"));

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
    // step += 1;   //?   Never update manually, as it do not trigger a re-render
    // console.log(step);
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>

        <div className="buttons">
          <button
            onClick={handlePrevious}
            className="button"
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="button"
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Step;