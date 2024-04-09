// Quiz.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import quizQuestion from "../quizQuestion.json";
import "./style.css";

const Quiz = () => {
  const [correctAns, setCorrect] = useState(0);
  const [wrongAns, setWrong] = useState(0);
  const [currIndex, setState] = useState(0);
  const Navigate = useNavigate();

  const increaseCount = () => {
    if (currIndex === quizQuestion.length - 1) {
      Navigate("/Result", { state: { correctAns, wrongAns } });
    } else {
      setState(currIndex + 1);
    }
  };

  const decreaseCount = () => {
    if (currIndex === 0) {
      alert("Already at First Question");
    } else {
      setState(currIndex - 1);
    }
  };

  function optionClick(option) {
    let selectedOption;

    switch (option) {
      case "1":
        selectedOption = quizQuestion[currIndex].optionA;
        break;
      case "2":
        selectedOption = quizQuestion[currIndex].optionB;
        break;
      case "3":
        selectedOption = quizQuestion[currIndex].optionC;
        break;
      case "4":
        selectedOption = quizQuestion[currIndex].optionD;
        break;
      default:
        selectedOption = "";
    }

    if (selectedOption === quizQuestion[currIndex].answer) {
      setCorrect(correctAns + 1);
    } else {
      setWrong(wrongAns + 1);
    }

    alert(
      selectedOption === quizQuestion[currIndex].answer ? "Correct!" : "Wrong!"
    );

    setTimeout(() => {
      increaseCount();
    }, 1500);
  }

  return (
    <div>
      <div>
        <h1>Question</h1>
        <p>{currIndex + 1} of 15</p>
        <h4>{quizQuestion[currIndex].question}</h4>
        <div className="option-div">
          <button onClick={() => optionClick("1")}>
            {quizQuestion[currIndex].optionA}
          </button>
          <button onClick={() => optionClick("2")}>
            {quizQuestion[currIndex].optionB}
          </button>
        </div>
        <div className="option-div">
          <button onClick={() => optionClick("3")}>
            {quizQuestion[currIndex].optionC}
          </button>
          <button onClick={() => optionClick("4")}>
            {quizQuestion[currIndex].optionD}
          </button>
        </div>
        <div className="cmd-btn">
          <button onClick={decreaseCount}>Previous</button>
          <button onClick={increaseCount}>Next</button>
          <Link to={"/"}>
            <button
              onClick={() => {
                alert("Are you sure you want to quit?");
                setCorrect(0);
                setWrong(0);
              }}
            >
              Quit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
