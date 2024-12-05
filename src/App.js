import "./App.css";
import { useState } from "react";
import NameInput from "./components/nameInput";
import { EasyQbank, MediumQbank, HardQbank } from "./components/questions";


function App() {
  const [userObj, setUserObj] = useState({
    name: null,
    level: 1,
    score: 0,
  });

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    if (!userObj.name) {
      alert("Please enter your name");
      return;
    }

    let selectedQuestions;
    if (userObj.level === 1) {
      selectedQuestions = EasyQbank;
    } else if (userObj.level === 2) {
      selectedQuestions = MediumQbank;
    } else {
      selectedQuestions = HardQbank;
    }

    setQuestions(selectedQuestions.sort(() => 0.5 - Math.random()).slice(0, 10)); // Shuffle and pick 10 questions
    setCurrentQuestionIndex(0);
    setQuizStarted(true);
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
      setUserObj({ ...userObj, score: userObj.score + 1 });
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Over! Your Score: ${userObj.score + 1}`);
      setQuizStarted(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
        {!quizStarted ? (
          <>
            <p>Welcome to the Quiz App</p>
            <NameInput
              name={userObj.name}
              setName={(name) => setUserObj({ ...userObj, name })}
            />
            {/* Level Selector */}
            <select
              value={userObj.level}
              onChange={(e) =>
                setUserObj({ ...userObj, level: parseInt(e.target.value) })
              }
            >
              <option value={1}>Easy</option>
              <option value={2}>Medium</option>
              <option value={3}>Hard</option>
            </select>
            <button onClick={startQuiz} className="button">
              Start Quiz
            </button>
          </>
        ) : (
          <>
            <h2>
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p>{questions[currentQuestionIndex].question}</p>
            <div className="answer-box">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(answer)}
                  className="answer-button"
                >
                  {answer}
                </button>
              ))}
            </div>
            <p>Score: {userObj.score}</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
