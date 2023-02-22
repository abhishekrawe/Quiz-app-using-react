import React, { useState } from "react";
import './App.css';

function App() {

  //Properties 

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "A line which cuts a pair of parallel lines is called",
      options: [
        { id: 0, text: "Tangent", isCorrect: true },
        { id: 1, text: "Chord", isCorrect: false },
        { id: 2, text: "Traversal", isCorrect: false },
        { id: 3, text: "Intersector", isCorrect: false },
      ],
    },
    {
      text: "if a ceratain sum of money can become 5 times of its principal in 10 years, then the rate of interest is ",
      options: [
        { id: 0, text: "20%", isCorrect: true },
        { id: 1, text: "30%", isCorrect: false },
        { id: 2, text: "40%", isCorrect: false },
        { id: 3, text: "50%", isCorrect: false },
      ],
    },
    {
      text: "if a ceratain sum of money can become 15 times of its principal in 5 years, then the rate of interest is ",
      options: [
        { id: 0, text: "10%", isCorrect: true },
        { id: 1, text: "34%", isCorrect: false },
        { id: 2, text: "40%", isCorrect: false },
        { id: 3, text: "58%", isCorrect: false },
      ],
    },
    {
      text: "A shopkeeper purchases 15 mangoes for Rs. 10 and selles them at 10 mangoes for Rs. 15 . Thus he earns a profit of ",
      options: [
        { id: 0, text: "50%", isCorrect: true },
        { id: 1, text: "75%", isCorrect: false },
        { id: 2, text: "80%", isCorrect: false },
        { id: 3, text: "125%", isCorrect: false },
      ],
    }
  ];

  //Helper Function 

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }

  }

  //restartGame

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">

      <h1 className="header"> Attempt Qestions Here 👍 </h1>


      {/* <h2> Current Score : {score}</h2> */}

      {showFinalResults ?
        <div className='final-results'>
          <h1> You hav successfully submitted the assignment </h1>
          <p> Question asked : {questions.length}</p>
          <p> Question correct : {score}</p>
          <p>Your Score - {(score / questions.length) * 100} %</p>
          <button onClick={() => restartGame()}> Restart Quiz </button>
        </div>
        :

        
        <div className="row p-5">
         
         <div className="col-sm-6 review-card w-25 p-3">
          <h1> Review Answer👇</h1>
          <h2> Current Score : {score}</h2>

         </div>
    
          <div className='col-sm-6 question-card w-75 p-3'>
          {/* <h2> Question :  {currentQuestion + 1} out of {questions.length} </h2> */}
          <h3 className='question-text'> Q. {currentQuestion + 1}. {questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              );
            })}
          </ul>
          </div>

          <div className="button-section">
            {currentQuestion > 0 && (
              <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
                Prev
              </button>
            )}
            {currentQuestion < questions.length - 1 && (
              <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                Next
              </button>
            )}
          </div>
        

        </div>
        



      }
    </div>

  );
}

export default App;
