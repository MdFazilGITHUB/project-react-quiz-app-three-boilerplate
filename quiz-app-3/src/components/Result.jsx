// Result.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Result = () => {
  // Access location state
  const { state } = useLocation();
  const { correctAns, wrongAns } = state;

  return (
    <div>
      <h1>Result</h1>
      <div>
        <h1>Your score is {Math.floor((correctAns / 15) * 100)}%</h1>
        <div>
          <div>
            <h4>Total number of questions</h4>
            <h4>15</h4>
          </div>
          <div>
            <h4>Number of attempted questions</h4>
            <h4>{correctAns + wrongAns}</h4>
          </div>
          <div>
            <h4>Number of correct answers</h4>
            <h4>{correctAns}</h4>
          </div>
          <div>
            <h4>Number of wrong answers</h4>
            <h4>{wrongAns}</h4>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/Quiz"}>
          <button>Play again</button>
        </Link>
        <Link to={"/"}>
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
