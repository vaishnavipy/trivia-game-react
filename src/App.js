
import './App.css';
import React, { useState } from "react"
import CategoryPicker from "./categoryPicker"
import Quiz from "./quiz"
import PlayAgain from "./playAgain"


function App() {

  const [category,setCategory] = useState("")

  const [gameOver,setGameOver] = useState(false)

  const [score,setScore] = useState("")

  const [playerAns,setPlayerAns] = useState("")

  const [quesArr,setQuesArr]=useState("")

  function chooseCategory(category){

    setCategory(category)

  }

  function handleGameOver(value){
    setGameOver(value)
  }

  function handleScore(score){
    setScore(score)
  }

  function handlePlayerAns(answerArr){
    setPlayerAns(answerArr)
  }

  function handleQuestionsArr(quesArr){
    setQuesArr(quesArr)
  }

  return (
    <div className="main-container">

      {!gameOver ? 
       category ?  <Quiz  
       category={category} 
       handleGameOver={handleGameOver} 
       chooseCategory={chooseCategory} 
       handleScore={handleScore} 
       handlePlayerAns={handlePlayerAns}
       handleQuestionsArr={handleQuestionsArr}
       /> 
      
      : <CategoryPicker chooseCategory={chooseCategory}/> 

      :
      
       <PlayAgain handleGameOver={handleGameOver} score={score} playerAns={playerAns} quesArr={quesArr}/>  }

    </div>
  );
}

export default App;
