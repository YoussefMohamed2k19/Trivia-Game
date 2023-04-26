import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Trivia.module.css";
import Header from "../../components/Header/Header";

const Trivia = () => {
  // State variables to store the question, answer, user's answer, and result
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  // State variable to keep track of whether the user has answered the current question
  const [isAnswered, setIsAnswered] = useState(false);

  // Call the API to get the first question when the component mounts
  useEffect(() => {
    getQuestion();
  }, []);

  // Call the API to get a new question
  const getQuestion = async () => {
    const response = await axios.get("https://opentdb.com/api.php?amount=1");
    setQuestion(response.data.results[0].question);
    setAnswer(response.data.results[0].correct_answer);
    setIsAnswered(false);
    setIsCorrect(null);
  };

  // Check the user's answer and update the result state
  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setIsAnswered(true);
    setTimeout(() => {
      setIsAnswered(false);
      setUserAnswer(""); // Clear the text field after checking the answer
      getQuestion();
    }, 2000); // Load a new question after 30 seconds
  };

  // Handle changes to the text input
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.trim() !== "") {
      // Validate that the text field is not empty
      checkAnswer();
    } else {
      setIsAnswered(true);
    }
  };

  // Render the component
  return (
    <div className={styles.trivia}>
      <Header />
      <form onSubmit={handleSubmit}>
      <div className={styles.quizContainer}>
        <div>
          <h2 id="question">
            {question}
          </h2>
          <input type="text" value={userAnswer} id="answerInput" onChange={handleInputChange} />
          <div className={styles.flexRight}>
            <button type="submit" id="submitBtn">Submit</button>
          </div>

        {/* Show the result message if the user has answered */}
        {isAnswered && isCorrect === true && (
          <h2 className={styles.correct}>Correct!</h2>
        )}
        { isCorrect === false && (
          <h2 id="resultMsg" className={styles.incorrect}>Incorrect!</h2>
        )}

        {/* Show an error message if the text field is empty */}
        {isAnswered && userAnswer.trim() === "" && (
          <h3 className={styles.error} id="errorMsg">Please enter an answer!</h3>
        )}

        </div>
      </div>
      </form>
    </div>
  );
};

export default Trivia;
